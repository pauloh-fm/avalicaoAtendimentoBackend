// server.js

import app from './src/app.js'; 
// const mongoose = require('mongoose');

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
