// server.js

const app = require('./src/app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3002;
// TODO: Conexão com BD
// const dbURI = 'mongodb://localhost/avaliacao-atendimento'; // Substitua pelo seu URI de banco de dados

// mongoose.connect(dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Erro na conexão ao banco de dados:'));
// db.once('open', () => {
//   console.log('Conexão ao banco de dados estabelecida.');
// });

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
