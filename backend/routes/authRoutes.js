const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { check } = require('express-validator'); // Para validação dos dados

// Rota para registro de usuário
router.post('/register', [
  check('nome', 'Nome é obrigatório').not().isEmpty(), // Validações
  check('email', 'Email inválido').isEmail(), // Email deve ser válido
  check('senha', 'Senha deve ter pelo menos 6 caracteres').isLength({ min: 6 }),
], authController.register);

// Rota para login de usuário
router.post('/login', authController.login); // Sem validação adicional para login

module.exports = router;
