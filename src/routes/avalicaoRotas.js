const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

// Rota para obter avaliações
router.get('/avaliacoes', avaliacaoController.obterAvaliacoes);

module.exports = router;
