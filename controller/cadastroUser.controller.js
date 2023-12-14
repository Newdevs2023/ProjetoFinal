const Cliente = require('../models/contato.model');

const crud = require('../models/crud');

const cadastroUser = (req, res) => {
    res.render('cadastroUser');
}
const filePath = './data/db.cadastroUser.json';

const salvarContato = (req, res) => {
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

module.exports = { cadastroUser, salvarContato };