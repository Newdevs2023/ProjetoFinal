const express = require('express')
const { engine } = require('express-handlebars')

const homeController = require('./controller/home.controller')

const loginController = require('./controller/login.controller')

const acoesAdmController = require('./controller/acoesAdm.controller');

const acoesUserController = require('./controller/acoesUser.controller');

const obrigadaController = require('./controller/obrigada.controller');

const cadastroUserController = require('./controller/cadastroUser.controller');

const produtosController = require('./controller/produtos.controller');

const usuariosController = require('./controller/usuarios.controller');

const pedidosController = require("./controller/pedidos.controller")

const pagamentoController = require ("./controller/pagamentos.controller");

const lancheController = require ("./controller/lanche.controller");

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

app.post('/salvarProduto', acoesAdmController.salvarProduto);

app.get('/login', loginController.login);

app.post('/loginEntrar', loginController.loginEntrar);

app.get('/acoesAdm', acoesAdmController.acoesAdm);

app.get('/cadastro', acoesAdmController.cadastro);

app.get('/produtos/excluir/:id', produtosController.excluirProduto);

app.post('/produtos/editar/salvaEdtProduto', produtosController.salvaEdtProduto);

app.get('/produtos/editar/:id', produtosController.editarProduto);

app.get('/cadastroUser', cadastroUserController.cadastroUser);

app.post('/salvarContato', cadastroUserController.salvarContato);

app.get('/produtos', produtosController.produtos);

app.get('/produtos/excluir/:id', produtosController.excluirProduto);

app.get('/lanches/addCarrinho/:id', lancheController.inserirCarrinho);

app.get('/usuarios', usuariosController.usuarios);

app.get('/pedidos', pedidosController.pedidos);

app.get('/usuarios/excluir/:id', usuariosController.excluirUsuario);

app.get('/usuarios/editar/:id', usuariosController.editarUsuario);

app.post('/usuarios/editar/salvaEdtUsuarios', usuariosController.salvaEdtUsuario);

app.post('/pagamentos', pagamentoController.pagamentoCreate);

app.get('/obrigada', obrigadaController.obrigada);

app.get('/carrinho', acoesUserController.abrirCarrinho);

app.get('/carrinho/excluir/:id', acoesUserController.excluirProduto);

app.get('/lanches', lancheController.produtos);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} (Graças a Deus!)`);
});