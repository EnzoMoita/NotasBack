exports.up = knex => knex.schema.createTable("notes", table => {
    table.increments("id");
    table.string("title", 255).notNullable(); // Mudado para string e adicionado notNullable
    table.string("description", 1000).notNullable(); // Mudado para string com limite de tamanho e adicionado notNullable
    table.integer("user_id")
          .references("id")
          .inTable("users")
          .onDelete("CASCADE") // Adiciona ação onDelete
          .onUpdate("CASCADE"); // Adiciona ação onUpdate
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Usar defaultTo é mais idiomático
    table.timestamp("updated_at").defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("notes");
