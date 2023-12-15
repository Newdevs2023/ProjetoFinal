const crud = require('../models/crud')
const filePath = './data/db.cadastro.json';

const produtos = (req, res) => {
    let produtos = crud.read(filePath);
    res.render('produtos', { expressHndBrs: true, dados: produtos })
}

const excluirProduto = (req, res) => {
    crud.delete(req.params.id, filePath)
    res.redirect('/produtos');
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

module.exports = { produtos ,editarProduto , excluirProduto, salvaEdtProduto};