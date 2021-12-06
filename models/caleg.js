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
      Caleg.belongsTo(models.Dapil, { foreignKey: 'dapilId', targetKey: 'id' });
      Caleg.belongsTo(models.StatusCaleg, { foreignKey: 'status', targetKey: 'id' });
      Caleg.belongsTo(models.Dokumen, {foreignKey: 'dokumenId'});
    }
  };
  Caleg.init({
    nama: DataTypes.STRING,
    NIK: DataTypes.STRING,
    noHp: DataTypes.STRING,
    foto_profil: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.DATE,
    agama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    no_urut: DataTypes.INTEGER,
    email: {
      validate: {
        isEmail: { message: 'Please input a valid Email format!' }
      },
      type: DataTypes.STRING
    },
    password: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Caleg',
  });
  return Caleg;
};