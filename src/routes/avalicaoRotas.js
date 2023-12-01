import { Router } from 'express';
const router = Router();
import AvaliacaoController from "../controllers/avalicaoController.js";

// Rota para obter avaliações
router.post('/avaliar', AvaliacaoController.enviarAvaliacao);

export default router;
