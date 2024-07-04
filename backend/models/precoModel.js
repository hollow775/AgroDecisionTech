const mongoose = require('mongoose');

const PrecoSchema = new mongoose.Schema({
  valor: { type: Number, required: true },
  data: { type: Date, default: Date.now },
  },{timestamps: true});

module.exports = mongoose.model('Preco', PrecoSchema);
