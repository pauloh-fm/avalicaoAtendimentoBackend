const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

router.post('/avaliacoes', avaliacaoController.create);
router.get('/avaliacoes', avaliacaoController.list);
// TODO: put, del

module.exports = router;
