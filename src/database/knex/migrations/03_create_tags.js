exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.string("name", 255).notNullable(); // Alterado para string com limite de caracteres
    table.integer("note_id")
          .references("id")
          .inTable("notes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE"); // Garante atualizações de cascade em mudanças de note_id
    table.integer("user_id")
          .references("id")
          .inTable("users")
          .onDelete("SET NULL") // Muda para SET NULL para não deletar o usuário quando a tag for deletada
          .onUpdate("CASCADE"); // Atualizações de user_id serão propagadas
});

exports.down = knex => knex.schema.dropTable("tags");
