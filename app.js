const express = require('express')
const { engine } = require('express-handlebars')

const homeController = require('./controller/home.controller')

const aboutController = require('./controller/about.controller')

const loginController = require('./controller/login.controller')

const acoesAdmController = require('./controller/acoesAdm.controller');

const acoesUserController = require('./controller/acoesUser.controller');

const cadastroUserController = require('./controller/cadastroUser.controller');

const produtosController = require('./controller/produtos.controller');

const usuariosController = require('./controller/usuarios.controller');

const pedidosController = require("./controller/pedidos.controller")

const app = express();
const port = 8080;

//BodyParser
const bodyParser = require('body-parser');

// Configurando o BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', engine({
    defaultLayout: 'main',
    helpers: {
        section: function (nome, options) {
            if (!this._sections) this._sections = {};
            this._sections[nome] = options.fn(this);
            return null;
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(`${__dirname}/publico`));

app.get('/', homeController.home);

app.get('/about', aboutController.about);

app.get('/cadastro', acoesAdmController.cadastro);

app.post('/salvarProduto', acoesAdmController.salvarProduto);

app.get('/login', loginController.login);

app.post('/loginEntrar', loginController.loginEntrar);

app.get('/acoesAdm', acoesAdmController.acoesAdm);

app.get('/produto/excluir/:id', acoesAdmController.excluirProduto);

app.post('/produto/editar/salvaEdtProduto', acoesAdmController.salvaEdtProduto);

app.get('/produto/editar/:id', acoesAdmController.editarProduto);

app.get('/cadastroUser', cadastroUserController.cadastroUser);

app.post('/salvarContato', cadastroUserController.salvarContato);

app.get('/produtos', produtosController.produtos);

app.get('/usuarios', usuariosController.usuarios);

app.get('/pedidos', pedidosController.pedidos);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} (Graças a Deus!)`);
});