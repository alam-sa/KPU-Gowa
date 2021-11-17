const { User } = require("../models");
const { comparePassword, hashPassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class UserController {
  static async login(req, res, next) {
    const { email, password } = req.body
    try {
      const foundUser = await User.findOne({
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
        userLevelId: foundUser.userLevelId
      });

      res.status(200).json({ access_token })

    } catch (err) {
      console.log(err);
      next(err)
    }
  }
  static async addAdmin(req, res, next) {
    const { email, password } = req.body
    try {
      console.log(req.body);
      const foundUser = await User.findOne({
        where: {
          email
        }
      });

      if (foundUser) throw {
        name: 'BadRequest',
        message: 'email telah terdaftar!'
      }

      const newAdmin = await User.create({
        email,
        password: hashPassword(password),
        userLevelId: 2,
        is_active: true
      })

      res.status(201).json({ message: 'Tambah Admin Berhasil!'})
      
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = UserController