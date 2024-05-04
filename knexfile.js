const path = require('path');

// Configurações de ambiente de desenvolvimento e produção
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'sua_senha_local',
      database: 'notasdb_local'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,  // Usando variável de ambiente para produção
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
    },
    ssl: { rejectUnauthorized: false } // Necessário para conexões SSL exigidas pela Heroku
  }
};
