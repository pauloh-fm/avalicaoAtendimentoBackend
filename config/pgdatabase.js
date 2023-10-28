const { Client } = require('pg');

const db = new Client({
  user: 'root', // O usuário definido no seu contêiner PostgreSQL
  host: 'localhost',
  database: 'test_db', // Nome do banco de dados
  password: 'root', // Senha definida no seu contêiner PostgreSQL
  port: 5432, // Porta do PostgreSQL
});

module.exports = db;