const { ParpolUser, Partai } = require("../models");
const { comparePassword, hashPassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class ParpolUserController {
  static async login(req, res, next) {
    const { email, password } = req.body
    try {
      const foundUser = await ParpolUser.findOne({
        where: {
          email
        },
        include: [{
          model: Partai
        }]
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
        userLevelId: foundUser.userLevelId
      });

      let partai = foundUser.Partai.nama_partai
      let logo = foundUser.Partai.logo
      let partaiId = foundUser.partaiId
      res.status(200).json({ access_token, partai, logo, partaiId })

    } catch (err) {
      console.log(err);
      next(err)
    }
  }
  static async getSuperAdmin(req, res, next) {
    try {
      const superAdmin = await ParpolUser.findAll({
        where: {
          userLevelId: 1
        }
      })

      res.status(200).json(superAdmin)
      
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async getAllAdminParpol(req, res, next) {
    const { partaiId } = req.params
    try {
      const admins = await ParpolUser.findAll({
        where: {
          partaiId: +partaiId
        }
      })

      res.status(200).json(admins)
      
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async addSuperadminParpol(req, res, next) {
    const { partaiId } = req.params
    const { email, password } = req.body
    try {
      const foundSuperAdmin = await ParpolUser.findAll({
        where: {
          partaiId: +partaiId,
          email
        }
      });

      if (foundSuperAdmin.length !== 0) throw {
        name: 'BadRequest',
        message: 'Admin Parpol Telah Didaftarkan!'
      }

      const newSuperAdmin = await ParpolUser.create({
        email,
        password: hashPassword(password),
        partaiId,
        userLevelId: 1,
        is_active: true
      })

      res.status(200).json({ message: "Akun Berhasil Dibuat!" })
      
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async updateIsActive(req, res, next) {
    const { id } = req.params
    const { is_active } = req.body
    console.log(id, is_active, ">>>>>>>>>>>>>>>>>");
    try {
      if (+id === 1) throw {
        name: 'BadRequest',
        message: 'Tidak Bisa Menonaktifkan Super Admin!'
      }
      const updateUserStatus = await ParpolUser.update({is_active},{
        where: {
          id: +id
        },
        returning: true
      })
      if (updateUserStatus[0] === 0) throw {
        name: 'BadRequest',
        message: 'Akun Tidak Ditemukan!'
      }
      
      res.status(201).json({message: `Status Akun Berhasil Diubah!`})
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
  static async addAdminParpol(req, res, next) {
    const { partaiId } = req.params
    const { email, password } = req.body
    try {
      const foundAdmin = await ParpolUser.findAll({
        where: {
          partaiId: +partaiId,
          email
        }
      });

      if (foundAdmin.length !== 0) throw {
        name: 'BadRequest',
        message: 'Admin Parpol Telah Didaftarkan!'
      }

      const newAdmin = await ParpolUser.create({
        email,
        password: hashPassword(password),
        partaiId,
        userLevelId: 2,
        is_active: true
      })

      res.status(200).json({ message: "Akun Berhasil Dibuat!" })
      
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deleteUser(req, res, next) {
    const { id } = req.params
    try {
      
      const delUser = await ParpolUser.destroy({
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

module.exports = ParpolUserController