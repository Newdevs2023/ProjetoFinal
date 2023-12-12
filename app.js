const express = require('express')
const { engine } = require('express-handlebars')

const homeController = require('./controller/home.controller')

const aboutController = require('./controller/about.controller')

const cadastroController = require('./controller/cadastro.controller')

const loginController = require('./controller/login.controller')

const acoesAdmController = require('./controller/acoesAdm.Controller');

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

app.get('/cadastro', cadastroController.cadastro);

app.post('/salvarContato', cadastroController.salvarContato);

app.get('/login', loginController.login );

app.post('/loginEntrar', loginController.loginEntrar);

app.get('/acoesAdm', acoesAdmController.acoesAdm);

app.post('/cadastrar', acoesAdmController.cadastrar);

app.post('/procurar', acoesAdmController.procurar);

app.post('/deletar', acoesAdmController.deletar);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} (Graças a Deus!)`);
});