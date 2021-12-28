exports.up = function (knex) {
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable() // 2 é o tamanho do campo
  })
}

// Up o que eu quero fazer, down caso de algum erro, ele vai deletar a tabela
exports.down = function (knex) {
  knex.schema.dropTable('ongs')
}
