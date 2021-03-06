'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.UserLevel, { foreignKey: 'userLevelId', targetKey: 'id' });
    }
  };
  User.init({
    email: {
      validate: {
        isEmail: { msg: 'Please input a valid Email format!' }
      },
      type: DataTypes.STRING
    },
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};