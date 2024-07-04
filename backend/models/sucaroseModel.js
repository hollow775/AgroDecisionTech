const mongoose = require('mongoose');

const SucaroseSchema = new mongoose.Schema({
  valor: { type: Number, required: true }
  }, {timestamps: true});

module.exports = mongoose.model('Sucarose', SucaroseSchema);
