const { Dokumen, Caleg } = require("../models");

class DokumenController {
  static async getDokumenById(req, res, next) {
    const { id } = req.params
    try {
      const dokumen = await Dokumen.findByPk(+id);
      res.status(200).json(dokumen);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async displayPDF(req, res, next) {
    const { name } = req.params
    try {
      res.sendFile(__dirname + `/public/berkas/${name}`);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async uploadDokumen(req, res, next) {
    try {
      let finalDokumenURL = req.file.filename.replace(/\s+/g, '')
    // req.protocol + "://" + req.get("host") + "/berkas/" + req.file.filename.replace(/\s+/g, '');

    res.json({ dokumen: finalDokumenURL });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async uploadDokumenCaleg(req, res, next) {
    const { id } = req.params
    const { 
      ktp,
      bb1,
      bb2,
      ijazah,
      suket_sehat,
      suket_kpu,
      skck,
      kta_parpol,
      dokumen_lainnya,
      // ktp_verified,
      // bb1_verified,
      // bb2_verified,
      // ijazah_verified,
      // suket_sehat_verified,
      // suket_kpu_verified,
      // skck_verified,
      // kta_parpol_verified,
      // dokumen_lainnya_verified 
    } = req.body
    const { email } = req.decoded
    try {
      const caleg = await Caleg.findOne({
        where: {
          email
        }
      });
      if (!caleg) throw {
        name: 'NotFound',
        message: 'Data Caleg Tidak Ditemukan!'
      }
      const uploadDokumen = await Dokumen.update({
        ktp,
        bb1,
        bb2,
        ijazah,
        suket_sehat,
        suket_kpu,
        skck,
        kta_parpol,
        dokumen_lainnya,
        ktp_verified: null,
        bb1_verified: null,
        bb2_verified: null,
        ijazah_verified: null,
        suket_sehat_verified: null,
        suket_kpu_verified: null,
        skck_verified: null,
        kta_parpol_verified: null,
        dokumen_lainnya_verified: null
      }, {
        where: {
          id
        }
      });
      
      res.status(201).json({ message: "Upload Dokumen Berhasil" })
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async updateStatusDokumen(req, res, next) {
    const { ktp_verified, bb1_verified, bb2_verified, ijazah_verified, suket_sehat_verified, suket_kpu_verified, skck_verified, kta_parpol_verified, dokumen_lainnya_verified } = req.body
    const { id } = req.params
    try {
      const updateStatusDok = await Dokumen.update({
        ktp_verified, bb1_verified, bb2_verified, ijazah_verified, suket_sehat_verified, suket_kpu_verified, skck_verified, kta_parpol_verified, dokumen_lainnya_verified
      }, {
        where: {
          id
        },
        returning: true
      });
      if (updateStatusDok[0] === 0) throw {
        name: 'NotFound',
        message: 'Dokumen Tidak Ditemukan!'
      }
      res.status(201).json({ message: "Update Status Dokumen Berhasil" })
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = DokumenController