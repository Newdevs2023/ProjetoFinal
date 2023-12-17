const Produto = require("./Cadastro.model");

class Compras extends Produto {
    constructor(id, lanche, descricao, preco, ptotal) {
        super(id, lanche, descricao, preco)
        this.total = ptotal;
    }

    calcularValorTotal(ptotal, preco) {
        if (ptotal < preco) {
            let result = 0;
            let cont;
            cont = ptotal;
            do {
                result += cont;
                cont++;
            } while (cont <= preco)
            return result;
        } else {
            console.log('Não foi possivel calcular o preço');
        }
    }
    aplicarDesconto() {
        let ptotal = this.calcularValorTotal()
        descontoAplicado = ptotalTotal * (10 / 100)
        return ptotal - descontoAplicado
    }

}

module.exports = Compras
