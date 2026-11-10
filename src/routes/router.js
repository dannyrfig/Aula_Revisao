import {Router} from 'express';
import clienteController from '../controllers/clienteController.js';
import VeiculoController from '../controllers/VeiculoController.js';
import AgendamentoController from '../controllers/AgendamentoController.js';
const router = Router();
  
//Rotas para o cliente
router.get('/clientes', clienteController.listar);
router.post('/clientes', clienteController.criar);

//Rotas para veículo
router.post('/veiculos',VeiculoController.criar)

//Rotas para agendamento
router.post('/agendamentos', AgendamentoController.criar)

export default router;