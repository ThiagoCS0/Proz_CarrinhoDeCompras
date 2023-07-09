const produtos = [{
  nome: "Nome do livro",
  valor: 11.99
}]

const bt_menos=document.getElementById('btn-subtrair-produto-01');
const bt_mais=document.getElementById('btn-adicionar-produto-01');
const qtd_produtos=document.getElementById('quantidade-produto-01')

bt_menos.addEventListener('click', ()=>{
  if(qtd_produtos.value > 0){
    qtd_produtos.value = Number(qtd_produtos.value) - 1;
    fun_ValorTotal(qtd_produtos.value);
  }
});
bt_mais.addEventListener('click', ()=>{
  if(qtd_produtos.value < 10){
    qtd_produtos.value = Number(qtd_produtos.value) + 1;
    fun_ValorTotal(qtd_produtos.value);
  }
});

const total=document.getElementById('valor-subtotal')
const quanto=document.getElementById('quantidade-subtotal')

function fun_ValorTotal(q){
  console.log("fun_ValorTotal");
  const sufixo = q == 1 ? ' item': q == 0 ? '' : ' itens';
  const valorTotal = q * produtos[0].valor;
  total.innerText = valorTotal.toFixed(2);
  quanto.innerText = q + sufixo;
}

fun_ValorTotal(qtd_produtos.value);