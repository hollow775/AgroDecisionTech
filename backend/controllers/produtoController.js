const Produto = require('../models/produtoModel');
const Preco = require('../models/precoModel');
const Sucarose = require('../models/sucaroseModel');

// Adicionar um novo produto
exports.addProduto = async (req, res) => {
  try {
    const { nome, preco, sucarose } = req.body;
    
    const novoPreco = new Preco({ valor: preco });
    const novaSucarose = new Sucarose({ valor: sucarose });
    
    await novoPreco.save();
    await novaSucarose.save();

    const novoProduto = new Produto({
      nome,
      preco: novoPreco._id,
      sucarose: novaSucarose._id,
    });

    await novoProduto.save();
    
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter todos os produtos
exports.getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find().populate(['preco', 'sucarose']);
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um produto pelo ID
exports.getProdutoById = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id).populate(['preco', 'sucarose']);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um produto pelo ID
exports.updateProduto = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    const { nome, preco, sucarose } = req.body;
    
    if (nome) produto.nome = nome;
    if (preco) {
      const precoAtualizado = await Preco.findById(produto.preco);
      precoAtualizado.valor = preco;
      await precoAtualizado.save();
    }
    if (sucarose) {
      const sucaroseAtualizada = await Sucarose.findById(produto.sucarose);
      sucaroseAtualizada.valor = sucarose;
      await sucaroseAtualizada.save();
    }

    await produto.save();
    
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar um produto pelo ID
exports.deleteProduto = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await Preco.findByIdAndRemove(produto.preco);
    await Sucarose.findByIdAndRemove(produto.sucarose);
    await produto.remove();

    res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
