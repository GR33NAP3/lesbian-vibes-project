'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {

  };
  Profile.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: DataTypes.STRING,
    bio: DataTypes.STRING,
    intrest: DataTypes.STRING,
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexuality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pronouns: DataTypes.STRING,
    intention: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    underscored: true,
    modelName: 'Profile',
  });
  return Profile;
};