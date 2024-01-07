var botaoMais = document.getElementById("btn-mais");
var pontosLadoAzul = document.getElementById("ponto_azul");
var botaoMenos = document.getElementById("btn-menos");

var botaoMaisVermelho = document.getElementById("btn-mais-vermelho");
var pontoVermelho = document.getElementById("ponto_vermelho");
var botaoMenosVermelho = document.getElementById("btn-menos-vermelho");

botaoMaisVermelho.addEventListener("click", function(){
    var pontoAtualVermelho = parseInt(pontoVermelho.innerHTML);
    pontoVermelho.innerHTML = pontoAtualVermelho+1;
})

botaoMenosVermelho.addEventListener("click", function(){
    var pontosAtualVermelho = parseInt(pontoVermelho.innerHTML);
    pontoVermelho.innerHTML = pontosAtualVermelho -1;
})

botaoMais.addEventListener("click", function(){
    var pontoAtual = parseInt(pontosLadoAzul.innerHTML);
    pontosLadoAzul.innerHTML = pontoAtual+1;
})

botaoMenos.addEventListener("click", function(){
var pontosAtual = parseInt(pontosLadoAzul.innerHTML);
pontosLadoAzul.innerHTML = pontosAtual-1;
})

