const mongoose = require('mongoose');

const NoticiasSchema = new mongoose.Schema({
  data: { type: Date, default: Date.now }, // Data da notícia, padrão para a data atual
  titulo: { type: String, required: true }, // Título da notícia, obrigatório
  conteudo: { type: String, required: true }, // Conteúdo da notícia, obrigatório
  imagem: { type: String }, // URL da imagem associada à notícia, opcional
  fonte: { type: String }, // Fonte da notícia
});

module.exports = mongoose.model('Noticias', NoticiasSchema); // Exporta o modelo de Notícias
