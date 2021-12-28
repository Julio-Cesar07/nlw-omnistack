const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')

const SessionsController = require('./controllers/SessionsController')
const routes = express.Router()

/* routes.get('/users', (request, response) => {
  const query = request.query

  console.log(query)
  return response.json({ evento: 'Pegar o Query' })
})

routes.get('/users/:id', (request, response) => {
  const route_param = request.params

  console.log(route_param)

  return response.json({ evento: 'Pegar o Route Param', aluno: 'Sei lá' })
})
 */

routes.post('/session', SessionsController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes
