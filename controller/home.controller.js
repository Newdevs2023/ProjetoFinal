const crud = require('../models/crud');
const filePath = './data/db.cadastro.json';

const home = (req, res) => {
    res.render('home', { cadastro: false });
}

module.exports = { home };