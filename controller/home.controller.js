const crud = require('../models/crud');

const filePath = './data/db.contatos.json';

const home = (req, res) => {
    let lanche = crud.read(filePath);
    res.render('home', { dados: lanche});
}

module.exports = { home };