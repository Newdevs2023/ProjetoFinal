const crud = require('../models/crud');
const Produto = require('../models/Cadastro.model')
const filePath = './data/db.cadastro.json';

const acoesAdm = (req, res) => {
    let lanche = crud.read(filePath);
    res.render('acoesAdm', { dados: lanche });
}

const salvarProduto = (req, res) => {
    let cliente = new Cliente(req.body);
    crud.read(filePath);
    cliente.id = crud.verificaId();
    if (cliente.id > 0) {
        crud.create(cliente, filePath);
    }else{
        console.log('Ocorreu um erro!');
    }
    res.redirect('/');
}


const cadastro = (req, res) => {
    res.render('cadastro');
}

module.exports = { acoesAdm , cadastro, salvarProduto};  