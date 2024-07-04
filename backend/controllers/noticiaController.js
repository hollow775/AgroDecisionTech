const Noticias = require('../models/noticias');

// Criar uma nova notícia
exports.addNoticia = async (req, res) => {
  try {
    const { data, titulo, conteudo, imagem, fonte } = req.body;
    
    const novaNoticia = new Noticias({
      data: data || Date.now(), // Usa a data fornecida ou a data atual
      titulo,
      conteudo,
      imagem,
      fonte,
    });
    
    await novaNoticia.save(); // Salva a notícia no banco de dados
    
    res.status(201).json(novaNoticia); // Retorna a notícia criada com status de sucesso
  } catch (error) {
    res.status(500).json({ error: error.message }); // Em caso de erro, retorna mensagem de erro
  }
};

// Obter todas as notícias
exports.getNoticias = async (req, res) => {
  try {
    const noticias = await Noticias.find(); // Busca todas as notícias no banco de dados
    res.status(200).json(noticias); // Retorna as notícias encontradas
  } catch (error) {
    res.status(500).json({ error: error.message }); // Retorna mensagem de erro em caso de falha
  }
};

// Obter uma notícia pelo ID
exports.getNoticiaById = async (req, res) => {
  try {
    const noticia = await Noticias.findById(req.params.id); // Busca notícia pelo ID
    if (!noticia) {
      return res.status(404).json({ error: 'Notícia não encontrada' }); // Se não encontrar, retorna 404
    }
    res.status(200).json(noticia); // Retorna a notícia encontrada
  } catch (error) {
    res.status(500).json({ error: error.message }); // Em caso de erro, retorna mensagem de erro
  }
};

// Atualizar uma notícia pelo ID
exports.updateNoticia = async (req, res) => {
  try {
    const noticia = await Noticias.findById(req.params.id); // Busca notícia pelo ID
    if (!noticia) {
      return res.status(404).json({ error: 'Notícia não encontrada' }); // Se não encontrar, retorna 404
    }
    
    const { data, titulo, conteudo, imagem, fonte } = req.body; // Obtém os dados para atualização
    
    // Atualiza os campos apenas se foram fornecidos no corpo da requisição
    if (data) noticia.data = data;
    if (titulo) noticia.titulo = titulo;
    if (conteudo) noticia.conteudo = conteudo;
    if (imagem) noticia.imagem = imagem;
    if (fonte) noticia.fonte = fonte;

    await noticia.save(); // Salva as alterações no banco de dados
    
    res.status(200).json(noticia); // Retorna a notícia atualizada com status de sucesso
  } catch (error) {
    res.status(500).json({ error: error.message }); // Em caso de erro, retorna mensagem de erro
  }
};

// Deletar uma notícia pelo ID
exports.deleteNoticia = async (req, res) => {
  try {
    const noticia = await Noticias.findById(req.params.id); // Busca notícia pelo ID
    if (!noticia) {
      return res.status(404).json({ error: 'Notícia não encontrada' }); // Se não encontrar, retorna 404
    }

    await noticia.remove(); // Remove a notícia do banco de dados
    
    res.status(200).json({ message: 'Notícia deletada com sucesso' }); // Retorna mensagem de sucesso após exclusão
  } catch (error) {
    res.status(500).json({ error: error.message }); // Em caso de erro, retorna mensagem de erro
  }
};
