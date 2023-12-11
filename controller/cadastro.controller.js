const Produto = require('../models/Cadastro.model');

const crud = require('../models/crud');

const cadastro = (req, res) => {
    res.render('cadastro');
}
const filePath = './data/db.cadastro.json';

const salvarContato = (req, res) => {
    let cliente = new Produto(req.body);
    crud.read(filePath);
    cliente.id = crud.verificaId();
    if (cliente.id > 0) {
        crud.create(cliente, filePath);
    }else{
        console.log('Ocorreu um erro!');
    }
    res.redirect('/');
}

module.exports = {cadastro, salvarContato };