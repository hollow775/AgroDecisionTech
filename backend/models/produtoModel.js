const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: mongoose.Schema.Types.ObjectId, ref: 'Preco' },
  sucarose: { type: mongoose.Schema.Types.ObjectId, ref: 'Sucarose' }, 
  },{timestamps: true });

module.exports = mongoose.model('Produto', ProdutoSchema);
