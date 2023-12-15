const crud = require('../models/crud')
const filePath = './data/db.cadastro.json';

const produtos = (req, res) => {
    let produtos = crud.read(filePath);
    res.render('produtos', { expressHndBrs: true, dados: produtos })
}

module.exports = { produtos };