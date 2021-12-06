const { Dapil } = require("../models");

class DapilController {
  static async getAllDapils(req, res, next) {
    try {
      const dapils = await Dapil.findAll();
      res.status(200).json(dapils)
    } catch (err) {
      console.log(err);
    }
  }
  static async addDapil(req, res, next) {
    const {nama_dapil, wilayah_dapil, jumlah_kursi, total_pemilih } = req.body
    try {
      const newDapil = await Dapil.create({
        nama_dapil,
        wilayah_dapil,
        jumlah_kursi: +jumlah_kursi,
        total_pemilih: +total_pemilih
      })
      res.status(201).json(newDapil)
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = DapilController