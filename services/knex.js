const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DB_NAME
    }
})

module.exports = knex;