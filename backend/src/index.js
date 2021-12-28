const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

/* Rota / Recurso o que vem depois do /

Métodos HTTP

GET: Buscar uma informação do backend
POST: Criar uma informação no backend
PUT: Alterar uma informação no backend
DELETE: Deletar uma informação no backend
*/

/**
 * Tipos de parâmetros:
 *
 * Query: Parâmetros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação)
 * Route Param: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * DRIVER: SELECT * FROM users
 * Query Builder: table('users).select('*').where
 */

app.listen(3333)
