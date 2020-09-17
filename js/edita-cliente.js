const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputCPF = document.querySelector('[data-cpf]')
const inputNome = document.querySelector('[data-nome]')

detalhaCliente(id).then( dados => {
    inputCPF.value = dados[0].cpf
    inputNome.value = dados[0].nome
})

const formEdicao = document.querySelector('[data-form]')

const mensagemSucesso = (mensagem) => {
    const linha = document.createElement('tr');
    const conteudo = `
    <div class="alert alert-success" role="alert">
        ${mensagem}
    </div>
    `

    linha.innerHTML = conteudo;
    return linha;
}

const mensagemFalha = (mensagem) => {
    const linha = document.createElement('tr');
    const conteudo = `
    <div class="alert alert-warning" role="alert">
        ${mensagem}
    </div>
    `

    linha.innerHTML = conteudo;
    return linha;
}


formEdicao.addEventListener('submit', event => {
    event.preventDefault();
    
    const cpf = inputCPF.value
    const nome = inputNome.value
    if(!validaCPF(cpf)) {
        alert("CPF inválido!");
        return;
    }

    editaCliente(id, cpf, nome).then(resposta => {
        if(resposta.status === 200) {
            formEdicao.appendChild(mensagemSucesso(
                'Cliente editado!'
            ));
        } else {
            formEdicao.appendChild(mensagemFalha(
                'Erro na ediçãp do cliente'
            ))
        }
    })
})