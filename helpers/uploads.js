const multer = require('multer');
const path = require('path');

// upload foto caleg
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/profil");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const uploadProfil = multer({ storage: storage });

// upload logo parpol
const logoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/logo");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const uploadLogo = multer({ storage: logoStorage });

// upload dokumen
const dokumenStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/dokumen");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const uploadDokumen = multer({ storage: dokumenStorage });




module.exports = { uploadProfil, uploadLogo, uploadDokumen }