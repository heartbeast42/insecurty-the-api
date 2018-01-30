// Update with your config settings.
var env = require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      localhost: 3000,
      database: 'menu'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
