const express = require('express')
const app = express()

app.get('/', (request, response) => {
  return response.json({ evento: 'Olá Marilene', aluno: 'Sei lá' })
})

app.listen(3333)
