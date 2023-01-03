'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table extends Model {
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
  table.init({
    seats: { type: DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'table',
  });
  return table;
};