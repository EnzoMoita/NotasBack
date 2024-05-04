const path = require('path');

module.exports = {
  development: {
    client: 'pg',  // Mudar o cliente para PostgreSQL
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'Gigante1974!',
      database: 'notasdb'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
    }
  }
};
