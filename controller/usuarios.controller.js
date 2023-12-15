const crud = require('../models/crud');
const Cliente = require('../models/contato.model')
const filePath = './data/db.cadastroUser.json';

const usuarios = (req, res) => {
    let usuarios = crud.read(filePath);
    res.render('usuarios', { expressHndBrs: true, dados: usuarios })
}

const excluirUsuario = (req, res) => {
    crud.delete(req.params.id, filePath)
    res.redirect('/usuarios');
}

const editarUsuario = (req, res) => {
    let result = crud.selectItem(req.params.id, filePath);
    console.log(result);
    res.render('editarUsuario',{data:result});
}

const salvaEdtUsuario = (req, res) => {
    let cliente = new Cliente(req.body);
    crud.read(filePath);
    console.log(cliente);
    crud.update(cliente, filePath);
    res.redirect('/usuarios');
}

module.exports = { usuarios , excluirUsuario, salvaEdtUsuario, editarUsuario};