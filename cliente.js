const informacoesClientes = [
    {
        cpf: "073451648",
        nome: "Jemers"

    }
]

const conteudoLinha = `
<tr>
    <td>${ informacoesClientes[0].cpf }</td>
    <td>${ informacoesClientes[0].nome }</td>
</tr>
`

const tabelaClientes = document.querySelector('[data-clientes-tabela]')


tabelaClientes.innerHTML += conteudoLinha
console.log( tabelaClientes )
