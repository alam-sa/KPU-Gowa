const { Dapil } = require("../models");

class DapilController {
  static async addDapil(req, res, next) {
    const {nama_dapil, kecamatan } = req.body
    try {
      const newDapil = await Dapil.create({
        nama_dapil, kecamatan
      })
      res.status(201).json(newDapil)
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = DapilController