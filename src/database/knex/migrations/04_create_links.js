exports.up = knex => knex.schema.createTable("links", table => {
    table.increments("id");
    table.string("url", 2048).notNullable(); // Define um limite para a URL se necessário
    table.integer("note_id")
          .references("id")
          .inTable("notes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE"); // Adicionado onUpdate para lidar com atualizações
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Usar defaultTo é mais comum para definir padrões
});

exports.down = knex => knex.schema.dropTable("links");
