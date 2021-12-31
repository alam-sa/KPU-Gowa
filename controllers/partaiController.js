const { Op } = require("sequelize");
const { Partai } = require("../models");

class PartaiController {
  static async getAllPartai(req, res, next) {
    try {
      const partais = await Partai.findAll({
        order: [['nomor_urut', 'ASC']]
      });
      res.status(200).json(partais)
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
    console.log(nomor_urut);
    try {
      const existingPartai = await Partai.findAll({
        where: {
          [Op.and] : {
            nomor_urut: +nomor_urut,
            id: {
              [Op.ne] : +id
            }
          }
        }
      })
      console.log(existingPartai);
      if (existingPartai.length > 0) throw {
        name: 'BadRequest',
        message: 'Nomor Urut Telah Digunakan!'
      }
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
      res.status(201).json({message: "Update Partai Berhasil!"})
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async deletePartai(req, res, next) {
    const { id } = req.params
    try {
      const delPartai = await Partai.destroy({
        where: {
          id: +id
        }
      })
      res.status(201).json({ message: "Berhasil Menghapus Partai!" })
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = PartaiController