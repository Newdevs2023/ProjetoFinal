const crud = require('../models/crud');
const Compras = require('../models/Carrinho.model')
const filePath= './data/db.carrinho.json';

const abrirCarrinho = (req, res) => {
    let lanche = crud.read(filePath);
    res.render('carrinho', { dados: lanche });
}



const excluirProduto = (req, res) => {
    crud.delete(req.params.id, filePath)
    res.redirect('/acoesUser');
}



module.exports = { abrirCarrinho , excluirProduto};  