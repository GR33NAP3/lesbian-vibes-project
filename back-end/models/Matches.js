'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {

  };
  Matches.init({
    match_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    primary_match: DataTypes.INTEGER,
    secondary_match: DataTypes.INTEGER,
  }, {
    sequelize,
    underscored: true,
    modelName: 'Matches',
  });
  return Matches;
};