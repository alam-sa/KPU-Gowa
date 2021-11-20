'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusCaleg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StatusCaleg.hasMany(models.Caleg, { foreignKey: 'status', targetKey: 'id' });
    }
  };
  StatusCaleg.init({
    nama_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusCaleg',
  });
  return StatusCaleg;
};