'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Caleg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Caleg.belongsTo(models.Partai, { foreignKey: 'partaiId', targetKey: 'id' });
    }
  };
  Caleg.init({
    nama: DataTypes.STRING,
    NIK: DataTypes.STRING,
    noHp: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    agama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    no_urut: DataTypes.INTEGER,
    email: {
      validate: {
        isEmail: { message: 'Please input a valid Email format!' }
      },
      type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Caleg',
  });
  return Caleg;
};