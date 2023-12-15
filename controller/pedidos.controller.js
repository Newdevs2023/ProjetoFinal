const crud = require('../models/crud')
const filePath = './data/db.pedidos.json';

const pedidos = (req, res) => {
    let pedidos = crud.read(filePath);
    res.render('pedidos', { expressHndBrs: true, dados: pedidos })
}

module.exports = { pedidos };