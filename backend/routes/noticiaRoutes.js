const express = require('express');
const router = express.Router(); // Cria um roteador do Express
const noticiasController = require('../controllers/noticiasController'); // Importa o controlador de notícias

// Rotas para CRUD de Notícias
router.post('/', noticiasController.addNoticia); // Criar uma notícia
router.get('/', noticiasController.getNoticias); // Obter todas as notícias
router.get('/:id', noticiasController.getNoticiaById); // Obter uma notícia pelo ID
router.put('/:id', noticiasController.updateNoticia); // Atualizar uma notícia pelo ID
router.delete('/:id', noticiasController.deleteNoticia); // Deletar uma notícia pelo ID

module.exports = router; // Exporta o roteador para uso no servidor Express
