const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Para geração de tokens JWT
const { validationResult } = require('express-validator');

// Registro de usuário
exports.register = async (req, res) => {
  const errors = validationResult(req); // Verifica erros de validação
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() }); // Retorna erros de validação
  }

  const { nome, email, senha } = req.body;

  try {
    // Verifica se o usuário já existe
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    // Cria um novo usuário
    usuario = new Usuario({ nome, email, senha });
    await usuario.save();

    // Cria um token JWT
    const token = jwt.sign({ id: usuario._id }, 'chave_secreta', {
      expiresIn: '1h', // Expira em 1 hora
    });

    res.status(201).json({ token }); // Retorna o token de autenticação
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};

// Login de usuário
exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Verifica se o usuário existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ error: 'Usuário ou senha incorretos' });
    }

    // Verifica se a senha está correta
    const isMatch = await bcrypt.compare(senha, usuario.senha);
    if (!isMatch) {
      return res.status(400).json({ error: 'Usuário ou senha incorretos' });
    }

    // Cria um token JWT
    const token = jwt.sign({ id: usuario._id }, 'chave_secreta', {
      expiresIn: '1h', // Expira em 1 hora
    });

    res.status(200).json({ token }); // Retorna o token de autenticação
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
};
