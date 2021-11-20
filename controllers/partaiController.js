const { Partai } = require("../models");

class PartaiController {
  static async getAllPartai(req, res, next) {
    try {
      
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async addPartai(req, res, next) {
    const { nama_partai, nomor_urut, logo, visi_misi } = req.body
    try {
      const newPartai = await Partai.create({
        nama_partai,
        nomor_urut,
        logo,
        visi_misi
      });
      res.status(201).json(newPartai)
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async uploadLogo(req, res, next) {
    try {
      let finalLogoURL =
    req.protocol + "://" + req.get("host") + "/logo/" + req.file.filename.replace(/\s+/g, '');

    res.json({ logo: finalLogoURL });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async update(req, res, next) {
    const { nama_partai, nomor_urut, logo, visi_misi } = req.body
    const { id } = req.params
    try {
      const updatePartai = await Partai.update({
        nama_partai,
        nomor_urut,
        logo,
        visi_misi
      }, {
        where: {
          id
        },
        returning: true
      });
      res.status(201).json(updatePartai)
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = PartaiController