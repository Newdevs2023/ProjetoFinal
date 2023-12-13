class LojaVirtual {
    constructor(i) {
        if (new.target === LojaVirtual) {
            throw new TypeError('Cannot create an instance of the abstract class');
        }
        this.lanche = i.lanche;
        this.id = i.id;
        this.descricao = i.descricao;
        this.preco = i.preco;
        this._carrinho = [];

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

    
}

module.exports = LojaVirtual;