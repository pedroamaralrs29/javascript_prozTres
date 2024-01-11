const titulo= document.createElement("h1")
titulo.innerText = "Titulo do exercicio"
titulo.id ="titulo"
console.log(titulo)

let criarTitulo = document.getElementById("titulo");
criarTitulo.appendChild(titulo)

const produto = document.createElement("div")

produto.innerHTML =
`
<h2 class="produto-venda"> Boné aba reta </h2>
<p class="descricao"> Bone confortavel e com regulagem adaptada </p>
<h4 class="preco"> R$ 50,00 </h4>

`

const criarProduto = document.getElementById("produto")
criarProduto.appendChild(produto)