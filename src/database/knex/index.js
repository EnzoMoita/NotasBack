const knexConfig = require("../../../knexfile");
const knex = require("knex");

// Seleciona a configuração de desenvolvimento ou produção baseada na variável de ambiente NODE_ENV
const config = process.env.NODE_ENV === 'production' ? knexConfig.production : knexConfig.development;

const connection = knex(config);

module.exports = connection;
