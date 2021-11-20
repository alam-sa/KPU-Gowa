const { Dokumen, Caleg } = require("../models");

class DokumenController {
  static async uploadDokumen(req, res, next) {
    try {
      let finalDokumenURL =
    req.protocol + "://" + req.get("host") + "/dokumen/" + req.file.filename.replace(/\s+/g, '');

    res.json({ dokumen: finalDokumenURL });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async uploadDokumenCaleg(req, res, next) {
    const { ktp, bb1, bb2, ijazah, suket_sehat, suket_kpu, skck, kta_parpol, dokumen_lainnya } = req.body
    const { email } = req.decoded
    try {
      const caleg = await Caleg.findOne({
        where: {
          email
        }
      });
      console.log(caleg);
      if (!caleg) throw {
        name: 'NotFound',
        message: 'Data Caleg Tidak Ditemukan!'
      }
      const uploadDokumen = await Dokumen.create({
        ktp, bb1, bb2, ijazah, suket_sehat, suket_kpu, skck, kta_parpol, dokumen_lainnya
      });
      
      await Caleg.update({dokumenId: uploadDokumen.id}, {
        where: {
          email
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