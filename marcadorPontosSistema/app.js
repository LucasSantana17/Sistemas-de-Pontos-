var botaoMais = document.getElementById("btn-mais");
var pontosLadoAzul = document.getElementById("ponto_azul");
var botaoMenos = document.getElementById("btn-menos");

botaoMais.addEventListener("click", function(){
var pontoAtual = parseInt(pontosLadoAzul.innerHTML);
pontosLadoAzul.innerHTML = pontoAtual+1;
})

botaoMenos.addEventListener("click", function(){
var pontosAtual = parseInt(pontosLadoAzul.innerHTML);
pontosLadoAzul.innerHTML = pontosAtual-1;
})

