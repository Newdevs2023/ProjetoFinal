const crud = require('../models/crud');
const Produto = require('../models/Cadastro.model')
const filePath = './data/db.cadastro.json';

const acoesAdm = (req, res) => {
    let lanche = crud.read(filePath);
    res.render('acoesAdm', { dados: lanche });
}

const excluirProduto = (req, res) => {
    crud.delete(req.params.id, filePath)
    res.redirect('/acoesAdm');
}

const editarProduto = (req, res) => {
    let result = crud.selectItem(req.params.id, filePath);
    console.log(result);
    res.render('editarProduto',{data:result});
}

const salvaEdtProduto = (req, res) => {
    let cliente = new Produto(req.body);
    crud.read(filePath);
    console.log(cliente);
    crud.update(cliente, filePath);
    res.redirect('/acoesAdm');
}

module.exports = { acoesAdm, excluirProduto, editarProduto , salvaEdtProduto };  