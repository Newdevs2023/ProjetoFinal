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

const calcularValorTotal = (req, res) => {
    let compra = new Compras(req.body);
    crud.read(filePath);
    compra.id = crud.verificaId();
    if (compra.id > 0) {
        Compras.calcularValorTotal(compra, filePath);
    }else{
        console.log('Ocorreu um erro!');
    }
    res.redirect('/carrinho');
}

const aplicarDesconto = (req, res) => {
    Compras.aplicarDesconto(req.params.ptotal, filePath)
    res.redirect('/carrinho');
}

module.exports = { abrirCarrinho, excluirProduto, calcularValorTotal, aplicarDesconto };  