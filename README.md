# Doguinho PetShop

Esse repositório foi desenvolvido durante o curso de Fetch API que eu fiz na Alura cursos online. O Doguinho-petshop é simula um site de petshop onde é possível cadastrar o nome e o CPF de um cliente que deseja consumir os serviços do nosso petshop.


<div align=center>
    <p><i>Um dos nossos clientes mais espertos</i></p>
    <img src='./img/doguinho.gif'>
</div>

## Sobre o projeto:
O repositório pode ser dividido em 3 partes:

### **O cliente**
Como mencionado anteriormente o projeto possui as funcionalidade de cadastrar clientes (com nome e CPF), editar os seus dados e até mesmo excluir um cliente. Além disso existe uma validação do CPF do cliente, para que seja possível ter certeza que o CPF digitado seja um CPF válido

### **O servidor**
A parte do servidor foi uma parte já disponibilizada pela Alura então acho que não é algo muito interessante eu falar sobre algo que eu não fiz.

### **O relacionamento entre o cliente e o servidor**
O relacionamento entre o cliente e o servidor acontece por meio do arquivo `cliente.js` na pasta `api`, esse arquivo possui vários métodos que fazem requisições HTTP para o servidor que é responsável pelas manipulações no banco de dados, como adicionar ou remover clientes por exemplo.

---

## Executando o projeto
### Pré-requisitos:
Existem poucos elementos necessários:
- npm
- git
- versão 10 do node ([link para instalar o nvm (node version manager)](https://github.com/nvm-sh/nvm) com ele você pode instalar diferentes versões do node)

### Passo a passo
Após fazer a instalação dos pré-requisitos siga o seguinte passo-a-passo para executar o projeto

1. Fazer o clone do repositório
    ```bash
        git clone https://github.com/RodrigoEC/doguinho-petshop.git
    ```

2. Entrar na pasta doguinho-petshop/server-petshop/
    ```bash
        cd ./doguinho-petshop/server-petshop/
    ```

3. Instalar as dependências do projeto
    ```bash
        npm install
    ```

4. Executar o projeto
    ```
        npm start
    ```

Pronto! o projeto está no rodando! Você só precisa acessar a url `http://127.0.0.1:5500/html/clientes.html` e cadastrar teus cliente tudo.

--- 

## Conceitos aprendidos:
Os conceitos relacionados a fetch API serão distribuídos em alguns arquivos e decidi usar esse readme como lobby desses arquivos

- []()