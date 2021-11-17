const { hashPassword } = require("../helpers/bcrypt");
const { ParpolUser } = require("../models");

class ParpolUserController {
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
  static async addSuperadminParpol(req, res, next) {
    const { partaiId } = req.params
    const { email, password } = req.body
    try {
      const foundSuperAdmin = await ParpolUser.findAll({
        where: {
          partaiId
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
}

module.exports = ParpolUserController