const Produto = require("./Cadastro.model");

class Compras extends Produto {
    //     constructor(id, lanche, descricao, preco, ptotal) {
    //         super(id, lanche, descricao, preco)
    //         this.#total = ptotal, 
    //         this._carrinho = [];
    //     }

    //     get total(){
    //         return this.#total;
    //     }

    //     set total(ptotal){
    //         this.#total = ptotal;
    //     }



    //       calcularValorTotal() {
    //         this.ptotal.reduce((total, produto) => total + produto.preco, 0);
    //       }

    //       aplicarDesconto(desconto) {
    //         const valorTotal = this.calcularValorTotal();
    //         const descontoAplicado = valorTotal * (desconto / 100);
    //         return valorTotal - descontoAplicado;
    //       }
}

module.exports = Compras
