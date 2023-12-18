const { aplicarDesconto } = require("../controller/acoesUser.controller");
const Produto = require("./Cadastro.model");

class Compras extends Produto {
    constructor(id, lanche, descricao, preco, ptotal, aplicarDesconto) {
        super(id, lanche, descricao, preco)
        this.ptotaltotal = ptotal;
        this.aplicarDesconto= aplicarDesconto;
    }

}

module.exports = Compras
