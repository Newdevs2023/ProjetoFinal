const crud = require('../models/crud')
const filePath = './data/db.cadastro.json';
const Compras = require('../models/Carrinho.model')

const produtos = (req, res) => {
    let produtos = crud.read(filePath);
    res.render('produtos', { expressHndBrs: true, dados: produtos })
}

const inserirCarrinho = (req, res) => {
    let compra = new Compras(req.body);
    crud.read(filePath);
    compra.id = crud.verificaId();
    if (compra.id > 0) {
        crud.create(compra, filePath);
    } else {
        console.log('Ocorreu um erro!');
    }
    res.redirect('/produtos');
}

const excluirProduto = (req, res) => {
    crud.delete(req.params.id, filePath)
    res.redirect('/produtos');
}


module.exports = { produtos , inserirCarrinho, excluirProduto};