const express = require('express')
const { engine } = require('express-handlebars')

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

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} (Graças a Deus!)`);
});