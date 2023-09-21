'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {

    // static associate({ Comment }) {
    //   Account.hasMany(Comment, { as: 'author', foreignKey: 'author_id' })
    // }

  };
  Account.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: DataTypes.STRING,
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    underscored: true,
    modelName: 'Account',
  });
  return Account;
};