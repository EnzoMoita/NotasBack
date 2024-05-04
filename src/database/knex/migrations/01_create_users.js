exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments('id').primary(); // Cria uma coluna 'id' como chave primária e autoincrementável
      table.string('name', 255).notNullable(); // Cria uma coluna 'name' que não pode ser nula
      table.string('email', 255).notNullable().unique(); // Cria uma coluna 'email' que não pode ser nula e deve ser única
      table.string('password', 255).notNullable(); // Cria uma coluna 'password' que não pode ser nula
      table.string('avatar', 255); // Cria uma coluna 'avatar' opcional
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Cria uma coluna 'created_at' com valor padrão como a hora atual
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Cria uma coluna 'updated_at' com valor padrão como a hora atual
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users'); // Remove a tabela se a migração for revertida
  };
  