const crud = require('../models/crud');
const Compras = require('../models/Carrinho.model')
const filePath = './data/db.carrinho.json';

const abrirCarrinho = (req, res) => {
    let lanche = crud.read(filePath);
    res.render('carrinho', { dados: lanche });
}

const excluirProduto = (req, res) => {
    crud.delete(req.params.id, filePath)
    res.redirect('/carrinho');
}

const valorTotal = (req, res) => {
    crud.calcularValorTotal(req.params.preco, filePath)
    res.render('/carrinho');
}

const calcularDesconto = (preco) => {
    let result = crud.calcularValorTotal(req.params.preco, filePath);
    const desconto = preco * 0.1;
    crud.calcularValorTotal = valorTotal - desconto;
    res.render('/carrinho', { data: result });
};

module.exports = { abrirCarrinho, excluirProduto, calcularDesconto, valorTotal };  
