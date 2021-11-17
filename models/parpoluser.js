'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ParpolUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ParpolUser.belongsTo(models.Partai, { foreignKey: 'partaiId', targetKey: 'id' });
      ParpolUser.belongsTo(models.UserLevel, { foreignKey: 'userLevelId', targetKey: 'id' });
    }
  };
  ParpolUser.init({
    email: {
      validate: {
        isEmail: { message: 'Please input a valid Email format!' }
      },
      type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ParpolUser',
  });
  return ParpolUser;
};