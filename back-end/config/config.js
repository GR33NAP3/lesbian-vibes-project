require('dotenv').config()

module.exports = {
    "development": {
      "username": "username",
      "password": "password",
      "database": "database name",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "test": {
      "username": "username",
      "password": "password",
      "database": "database name _test",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "production": {
      "username": "username",
      "password": "password",
      "database": "database name _production",
      "host": "127.0.0.1",
      "dialect": "postgres"
    }
  }