'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
   * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.table, {
        foreignKey: {
            allowNull: false
        }
      })
      this.belongsTo(models.user, {
        foreignKey: {
            allowNull: false
        }
      })
    }
  }
  reservation.init({
    date: { type: DataTypes.DATEONLY, allowNull: false},
  }, {
    sequelize,
    modelName: 'reservation',
  });
  return reservation;
};