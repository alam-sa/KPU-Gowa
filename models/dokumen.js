'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dokumen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dokumen.hasOne(models.Caleg, {foreignKey: 'dokumenId'});

    }
  };
  Dokumen.init({
    ktp: DataTypes.STRING,
    bb1: DataTypes.STRING,
    bb2: DataTypes.STRING,
    ijazah: DataTypes.STRING,
    suket_sehat: DataTypes.STRING,
    suket_kpu: DataTypes.STRING,
    skck: DataTypes.STRING,
    kta_parpol: DataTypes.STRING,
    dokumen_lainnya: DataTypes.STRING,
    ktp_verified: DataTypes.BOOLEAN,
    bb1_verified: DataTypes.BOOLEAN,
    bb2_verified: DataTypes.BOOLEAN,
    ijazah_verified: DataTypes.BOOLEAN,
    suket_sehat_verified: DataTypes.BOOLEAN,
    suket_kpu_verified: DataTypes.BOOLEAN,
    skck_verified: DataTypes.BOOLEAN,
    kta_parpol_verified: DataTypes.BOOLEAN,
    dokumen_lainnya_verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Dokumen',
    hooks: {
      beforeCreate: (doc, options) => {
        doc.ktp_verified = null
        doc.bb1_verified = null
        doc.bb2_verified = null
        doc.ijazah_verified = null
        doc.suket_sehat_verified = null
        doc.suket_kpu_verified = null
        doc.skck_verified = null
        doc.kta_parpol_verified = null
        doc.dokumen_lainnya_verified = null
      }
    }
  });
  return Dokumen;
};