const deletaCliente = id => {
    if (confirm("Você realmente deseja deletar o cliente?")) {
        removeCliente(id)
    }
}

const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');
    const conteudo = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-danger" onclick="deletaCliente(${id})">Excluir</button>
    <a href="edita-clientes.html?id=${id}"><button type="button" class="btn btn-info" >Editar</button></a>
    `

    linha.innerHTML = conteudo;
    return linha;
};


const tabelaClientes = document.querySelector('[data-clientes-tabela]')
listarClientes().then(exibe => {
    exibe.forEach(indice => {
        tabelaClientes.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    })
})