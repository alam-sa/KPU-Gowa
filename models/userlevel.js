'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserLevel.hasMany(models.ParpolUser, { foreignKey: 'userLevelId', targetKey: 'id' });
      UserLevel.hasMany(models.User, { foreignKey: 'userLevelId', targetKey: 'id' });
    }
  };
  UserLevel.init({
    user_level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserLevel',
  });
  return UserLevel;
};