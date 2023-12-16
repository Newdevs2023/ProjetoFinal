const crud = require('../models/crud')
const filePath = './data/db.cadastro.json';
const filePathCarrinho = './data/db.carrinho.json';
const Compras = require('../models/Carrinho.model')

const produtos = (req, res) => {
    let produtos = crud.read(filePath);
    res.render('lanches', { expressHndBrs: true, dados: produtos })
}

const inserirCarrinho = (req, res) => {
    let compra = new Compras(req.body);
    crud.read(filePath);
    compra.id = crud.verificaId();
    if (compra.id > 0) {
        crud.create(compra, filePathCarrinho);
    } else {
        console.log('Ocorreu um erro!');
    }
    res.redirect('/lanches');
}

module.exports={produtos,inserirCarrinho};