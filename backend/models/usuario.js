const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Para criptografia de senhas

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Email deve ser único
  senha: { type: String, required: true },
});

// Antes de salvar, criptografa a senha
UsuarioSchema.pre('save', async function (next) {
  if (this.isModified('senha')) { // Apenas criptografa se a senha foi modificada
    const salt = await bcrypt.genSalt(10); // Gera o salt
    this.senha = await bcrypt.hash(this.senha, salt); // Hash da senha com salt
  }
  next(); // Continua com o processo de salvamento
});

module.exports = mongoose.model('Usuario', UsuarioSchema); // Exporta o modelo
