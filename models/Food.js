const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Food extends Model {};
Food.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    protien: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    carbs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fat: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sequelize,
    timestamps: true
  }
)

module.exports = Food;