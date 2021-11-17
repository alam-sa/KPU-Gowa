'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dapil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Dapil.init({
    nama_dapil: DataTypes.STRING,
    kecamatan: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Dapil',
  });
  return Dapil;
};