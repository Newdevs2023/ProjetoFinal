const Cadastro = require('../models/cadastro.model');
// const conMysql = require('../dao/connection.database');
const crud = require('../models/crud');

const cadastro = (req, res) => {
    res.render('cadastro');
}

const filePath = "./data/db.cadastro.json";
const salvaContato = (req, res) => {
    let cadastro = new Cadastro(req.body);

    crud.read(filePath);
    cadastro.id = crud.verificaId();
    if (cadastro.id > 0){
        crud.create(cadastro, filePath);
    }else {
        console.log("Ocorreu um erro!");
    }
    res.redirect('/');
}

module.exports = {cadastro, salvaContato};