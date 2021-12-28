const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query
    /* const incidents = await connection('incidents').select('*') */

    const [count] = await connection('incidents').count()

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.uf',
        'ongs.city'
      ])

    // Acima uma lógica de páginação, para ter uma limite de caso por página, então
    // se formos para mais uma página, aparecerá 5 novos casos
    // limit(5) para pegar apenas 5 resultados, offset para pegar as 5 posições, então se page = 1
    // offset = 0, então pega os 5 primeiros, se page = 2, offset = 5, pega a partir do sexto
    // para testar, /incidents?page=2
    response.header('X-Total-Count', count['count(*)']) // vai colocar no header da página um campo com nome
    // X-Total-Count e valor da posição 'count(*)' do array count
    return response.json(incidents)
  },

  async create(request, response) {
    const { title, description, value } = request.body
    const ong_id = request.headers.authorization

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return response.json({ id })
  },

  async delete(request, response) {
    const { id } = request.params
    const ong_id = request.headers.authorization

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first() //pegar o primeiro registro

    if (ong_id != incident.ong_id) {
      return response.status(401).json({ error: 'Fudeu de vez' }) //retorna um erro, http status code
    }

    await connection('incidents').where('id', id).delete()
    return response.status(204).send()
  }
}
