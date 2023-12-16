const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const login = (req, res) => {
    res.render('login');
}

const loginEntrar = (req, res) => {

    const { usuario, senha } = req.body;
    console.log(usuario, senha, req.body);
    if (usuario === 'admin' && senha === '1234') { // Ajustei para senha ser uma string
        console.log('Acessou login entrar');
        // req.session.user = usuario;
        res.redirect('/acoesAdm');

    } else {
        res.render('login', { error: 'Credenciais inválidas. Tente novamente.' });
    }
};

module.exports = { login, loginEntrar };

// precisamos do npm i express-session para "autentificar o acesso"
