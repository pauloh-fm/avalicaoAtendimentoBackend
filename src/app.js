// src/app.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import avaliacaoRoutes from './routes/avalicaoRotas.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://root:ferramental@localhost:27017/?authMechanism=DEFAULT', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', err => {
  console.error('Erro na conexão com o MongoDB:', err);
});


app.use('/api', avaliacaoRoutes);

export default app;
