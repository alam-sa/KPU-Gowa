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
  static async deleteDapil(req, res, next) {
    const { id } = req.params
    try {
      const deletedDapil = await Dapil.destroy({
        where: {
          id: +id
        }
      });
      if (!deletedDapil) throw {
        name: 'BadRequest',
        message: 'Data Tidak Ditemukan!'
      }
      
      res.status(201).json({message: `Dapil Berhasil Dihapus!`})
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = DapilController