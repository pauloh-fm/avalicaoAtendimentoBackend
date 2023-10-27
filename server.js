const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuração para a conexão ao banco de dados PostgreSQL
const db = new Client({
  user: 'root',
  host: 'localhost',
  database: 'test_db',
  password: 'root',
  port: 5432,
});

db.connect()
  .then(() => {
    console.log('Conexão ao banco de dados PostgreSQL estabelecida.');
  })
  .catch((err) => {
    console.error('Erro na conexão ao banco de dados:', err);
  });

// Rota para criar uma nova avaliação
app.post('/avaliacoes', (req, res) => {
  const { classificacao, comentario } = req.body;
  const query = 'INSERT INTO avaliacoes (classificacao, comentario) VALUES ($1, $2) RETURNING *';

  db.query(query, [classificacao, comentario])
    .then((result) => {
      res.status(201).json(result.rows[0]);
    })
    .catch((err) => {
      console.error('Erro ao inserir avaliação:', err);
      res.status(400).send(err);
    });
});

// Rota para listar todas as avaliações
app.get('/avaliacoes', (req, res) => {
  const query = 'SELECT * FROM avaliacoes';

  db.query(query)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.error('Erro ao buscar avaliações:', err);
      res.status(500).send(err);
    });
});

// Outras rotas para atualização, exclusão, etc.

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
