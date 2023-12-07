class LojaVirtual {
    constructor() {
        if (new.target === LojaVirtual) {
            throw new TypeError('Cannot create an instance of the abstract class');
        }
        this.lanche = [];
        this._carrinho = [];
    }

    cadastrarProduto(produto) {
        this.lanche.push(produto);
    }

    get carrinho() {
        return this._carrinho;
    }

    set carrinho(novoCarrinho) {
        this._carrinho = novoCarrinho;
    }

    adicionarAoCarrinho(produto) {
        this._carrinho.push(produto);
    }

    calcularValorTotal() {
        return this._carrinho.reduce((total, produto) => total + produto.preco, 0);
    }

    aplicarDesconto(desconto) {
        const valorTotal = this.calcularValorTotal();
        const descontoAplicado = valorTotal * (desconto / 100);
        return valorTotal - descontoAplicado;
    }

    verificaId(){
        if(this.myData.length > 0){
            let idMaximo = crud.myData.at(-1).id;
            return ++idMaximo;
        }
        return 1;
    }
}