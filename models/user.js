'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
   * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reservation)
    }
  }
  user.init({
    name: { type: DataTypes.STRING, unique: true, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false},
    phone: { type: DataTypes.INTEGER },
    password: { type: DataTypes.STRING, allowNull: false},
    isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false},
    accountBlocked: { type: DataTypes.BOOLEAN, defaultValue: false}
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};