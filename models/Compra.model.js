class Compra extends LojaVirtual{
    calcularValorTotal() {
        return this._carrinho.reduce((total, produto) => total + produto.preco, 0);
    }

    aplicarDesconto(desconto) {
        const valorTotal = this.calcularValorTotal();
        const descontoAplicado = valorTotal * (desconto / 100);
        return valorTotal - descontoAplicado;
    }
}