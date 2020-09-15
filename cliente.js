const informacoesClientes = [
    {
        cpf: "073451648",
        nome: "Jemers"
    }, {
        cpf: "073451648",
        nome: "Kimberly"
    }
]

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr')
    const conteudo = `
    <td>${ cpf }</td>
    <td>${ nome }</td>
    `
    
    linha.innerHTML = conteudo
    return linha
}

const tabelaClientes = document.querySelector('[data-clientes-tabela]')
informacoesClientes.forEach( indice => {
    tabelaClientes.appendChild(exibeCliente(indice.cpf, indice.nome))
})