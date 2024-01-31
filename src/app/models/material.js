'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate(models) {
      Material.hasMany(models.Collection, { sourceKey: "id", foreignKey: "materialId" })
      Material.belongsTo(models.User, { targetKey: "id", foreignKey: "userId" })
    }
  }
  Material.init({
    name: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};
