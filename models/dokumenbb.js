'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DokumenBB extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DokumenBB.init({
    bb1: DataTypes.STRING,
    bb2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DokumenBB',
  });
  return DokumenBB;
};