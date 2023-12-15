const crud = require('../models/crud')
const filePath = './data/db.cadastroUser.json';

const usuarios = (req, res) => {
    let usuarios = crud.read(filePath);
    res.render('usuarios', { expressHndBrs: true, dados: usuarios })
}

module.exports = { usuarios };