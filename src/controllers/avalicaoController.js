// src/controllers/avalicaoController.js

import AvaliacaoModel from '../models/avalicaoModel.js';

const AvaliacaoController = {
  enviarAvaliacao: async (req, res) => {
    try {
      console.log('Recebendo avaliação:', req.body);
      const { avaliacao, dataAvaliacao } = req.body;
      const novaAvaliacao = new AvaliacaoModel({ avaliacao, dataAvaliacao });

      await novaAvaliacao.save();
      console.log('Avaliação salva com sucesso!');
      res.status(201).json({ message: 'Avaliação recebida com sucesso!' });
    } catch (error) {
      console.error('Erro ao processar avaliação:', error.message);
      res.status(500).json({ error: error.message });
    }
  },
};


export default AvaliacaoController;
