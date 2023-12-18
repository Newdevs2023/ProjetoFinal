const crud = require('../models/crud');
const Compras = require('../models/Carrinho.model')
const filePath = './data/db.carrinho.json';

const abrirCarrinho = (req, res) => {
    let lanche = crud.read(filePath);
    res.render('carrinho', { dados: lanche });
}

const excluirProduto = (req, res) => {
    crud.delete(req.params.id, filePath)
    res.redirect('/carrinho');
}

const calcularValorTotal = (req, res) => {
    let compra = new Compras(req.body);
    crud.read(filePath);
    compra.id = crud.verificaId();
    if (compra.id > 0) {
        crud.update(compra, filePath);
        if (ptotal < preco) {
            let result = 0;
            let cont;
            cont = ptotal;
            do {
                result += cont;
                cont++;
            } while (cont <= preco)
        } else {
            console.log('Ocorreu um erro!');
        }
        res.redirect('/carrinho');
    }
}

const aplicarDesconto = (req, res) => {
    let aplicarDesconto = 0
    crud.selectItem(req.params.ptotal, filePath)
    if (aplicarDesconto < ptotal) {
        let ptotal = this.calcularValorTotal()
        aplicarDesconto = ptotal * (aplicarDesconto / 100)
        ptotal = ptotal - aplicarDesconto
        alert(`deconto aplicado de 10%, valor da compra ${ptotal}`)
    }
    res.redirect('/carrinho');
}


module.exports = { abrirCarrinho, excluirProduto, calcularValorTotal, aplicarDesconto };  