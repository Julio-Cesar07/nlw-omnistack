const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development) //conexão de desenvolvimento, as conexões podem ser visto no knexfile

module.exports = connection
