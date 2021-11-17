const { Op } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
const { Caleg } = require("../models");

class CalegController {
  static async register(req, res, next) {
    const {
      nama,
      NIK,
      noHp,
      tempat_lahir,
      tanggal_lahir,
      agama,
      alamat,
      provinsi,
      kabupaten,
      email,
      password,
      dapilId,
      partaiId
    } = req.body
    console.log(dapilId);
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
        noHp,
        tempat_lahir,
        tanggal_lahir,
        agama,
        alamat,
        provinsi,
        kabupaten,
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
}

module.exports = CalegController