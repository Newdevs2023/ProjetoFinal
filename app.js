const express = require('express')
const { engine } = require('express-handlebars')

const homeController = require('./controller/home.controller')

const aboutController = require('./controller/about.controller')

const cadastrarController = require('./controller/cadastrar.controller')

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

app.get('/cadastrar', cadastrarController.cadastrar);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} (Graças a Deus!)`);
});