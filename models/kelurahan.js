'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelurahan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Kelurahan.init({
    nama_kelurahan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kelurahan',
  });
  return Kelurahan;
};