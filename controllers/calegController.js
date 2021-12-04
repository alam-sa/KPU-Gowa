const { Op } = require("sequelize");
const { Caleg, Partai, Dapil, StatusCaleg } = require("../models");
const { comparePassword, hashPassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const { phoneValidator } = require("../helpers/inputValidator");

class CalegController {
  static async register(req, res, next) {
    const {
      nama,
      NIK,
      email,
      password,
      dapilId,
      partaiId
    } = req.body
    try {
      const foundUser = await Caleg.findOne({
        where: {
          [Op.or]: {
            NIK,
            email
          }
        }
      })

      if (foundUser) throw {
        name: 'BadRequest',
        message: 'NIK / Email telah terdaftar!'
      }
      const newUser = await Caleg.create({
        nama,
        NIK,
        email,
        password: hashPassword(password),
        dapilId,
        partaiId,
        status: 1
      })
      res.status(201).json(newUser)
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async login(req, res, next) {
    const { email, password } = req.body
    try {
      const foundUser = await Caleg.findOne({
        where: {
          email
        }
      });

      if (!foundUser) throw {
        name: 'BadRequest',
        message: 'email / password salah!'
      }

      const isPasswordMatch = comparePassword(password, foundUser.password);

      if (!isPasswordMatch) throw {
        name: 'BadRequest',
        message: 'email / password salah!'
      };
      
      const access_token = generateToken({
        email: foundUser.email,
        status: foundUser.status
      });

      res.status(200).json({ access_token })

    } catch (err) {
      console.log(err);
      next(err)
    }
  }
  static async getAllByStatus(req, res, next) {
    const { status } = req.params
    try {
      const foundCaleg = await Caleg.findAll({
        where: {
          status
        },
        include: [
          {
            model: Partai, 
            attributes: {exclude: ['createdAt', 'updatedAt']}
          },
          {
            model: Dapil, 
            attributes: {exclude: ['createdAt', 'updatedAt']}
          },
          {
            model: StatusCaleg, 
            attributes: {exclude: ['createdAt', 'updatedAt']}
          }]
      });
      res.status(200).json(foundCaleg)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
  static async getCalegData(req, res, next) {
    const { id } = req.params
    try {
      const foundCaleg = await Caleg.findByPk(+id, { 
        include: [
          {
            model: Partai, 
            attributes: {exclude: ['createdAt', 'updatedAt']}
          },
          {
            model: Dapil, 
            attributes: {exclude: ['createdAt', 'updatedAt']}
          }],
        attributes: {exclude: ['createdAt']},
      });
      console.log(foundCaleg, ">>>>>>>>>>>>>>>>>..");
      res.status(200).json(foundCaleg)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
  static async uploadImage(req, res, next) {
    try {
      let finalImageURL =
    req.protocol + "://" + req.get("host") + "/profil/" + req.file.filename.replace(/\s+/g, '');

    res.json({ image: finalImageURL });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async updateProfil(req, res, next) {
    const { email } = req.decoded
    const { nama, NIK, noHp, tempat_lahir, tanggal_lahir,  agama,  alamat, provinsi, kabupaten, kecamatan } = req.body
    try {

      const updateProfilCaleg = await Caleg.update({
        nama, NIK, noHp, tempat_lahir, tanggal_lahir,  agama,  alamat, provinsi, kabupaten, kecamatan
      }, {
        where: {
          email
        },
        returning: true
      });
      res.status(201).json(updateProfilCaleg)
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async updateStatus(req, res, next) {
    const { id } = req.params
    const { status } = req.body
    try {
      if (!req.decoded.userLevelId) throw {
        name: "Forbidden",
        message: "Tidak dapat diakses!"
      }
      const updateStatusCaleg = await Caleg.update({
        status: +status
      }, {
        where: {
          id
        },
        returning: true
      });
      res.status(201).json({ message: 'Update Status Berhasil!' })
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deleteUser(req, res, next) {
    const { id } = req.params
    try {
      
      const delUser = await Caleg.destroy({
        where: {
          id
        }
      })
      if (!delUser) throw {
        name: 'BadRequest',
        message: 'Akun Tidak Ditemukan!'
      }
      
      res.status(201).json({message: `Akun Berhasil Dihapus!`})
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
}

module.exports = CalegController