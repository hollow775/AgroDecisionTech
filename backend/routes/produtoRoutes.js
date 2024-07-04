const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController')
// Rotas para CRUD de Produto
router.post('/', produtoController.addProduto);
router.get('/', produtoController.getProdutos);
router.get('/:id', produtoController.getProdutoById);
router.put('/:id', produtoController.updateProduto);
router.delete('/:id', produtoController.deleteProduto);

module.exports = router;
