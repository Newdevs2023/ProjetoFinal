const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const acoesAdm = (req, res) => {

    res.render('acoesAdm');

}
const cadastrar = (req, res) => {
    res.redirect('/cadastro')
};

const procurar = (req, res) => {
    res.redirect('/procurar')
};

const deletar = (req, res) => {
    res.redirect('/deletar')
};


module.exports = { acoesAdm, cadastrar, procurar, deletar };     