'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Partai.hasMany(models.Caleg, { foreignKey: 'partaiId', targetKey: 'id' });
      Partai.hasMany(models.ParpolUser, { foreignKey: 'partaiId', targetKey: 'id' });
    }
  };
  Partai.init({
    nama_partai: DataTypes.STRING,
    nomor_urut: DataTypes.INTEGER,
    logo: DataTypes.STRING,
    visi_misi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Partai',
  });
  return Partai;
};