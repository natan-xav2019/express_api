const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvar(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function excluir(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = {  excluir, salvar, getProduto, getProdutos }
