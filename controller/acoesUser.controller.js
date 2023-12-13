const crud = require('../models/crud');
const Compras = require('../models/Carrinho.model')
const filePath= './data/db.carrinho.json';

const acoesUser = (req, res) => {
    let lanche = crud.read(filePath);
    res.render('acoesUser', { dados: lanche });
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
    res.redirect('/acoesUser');
}
const abrirCarrinho = (req, res) => {
    res.render('/carrinho');
}

const excluirProduto = (req, res) => {
    crud.delete(req.params.id, filePath)
    res.redirect('/acoesUser');
}




module.exports = { acoesUser, excluirProduto, abrirCarrinho, inserirCarrinho };  