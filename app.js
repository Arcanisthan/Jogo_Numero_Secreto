let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensamgemInical()
//let=variavel
//document= Buscar o arquivo HTML
//querySelector= Buscar a linha exata do HTML
//innerHTML= Dentro daquele titulo 
//speak= o que vc quer dizer
//rate= velocidade da fala
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}
// tag e texto= vai chama a função do h1 e p  
function exibirMensamgemInical(params) {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

// Ao clique precisa acontecer algo função
// fuction= determinar alguma ação dentro do code
// input= espaço que o usuario tem para interagir 
// value= como o input não é um texto é algo que o usuario /
// colocou la dentro utilizar ele 
// getelementbyid= vai buscar  a tag id / 
// reiniciar vai buscar exatamente qual id
//.removeattibue vai limpa o campo / 
// disabled vai exatamente qual e campo
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
} 
//return= retorma a informação onde esta o numero aleatorio
//inclues= verificar se esta na lista
//Push adicionar algo na lista
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNalista == numeroLimite);{
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    } 
}
function limpaCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio;
    limpaCampo ();
    tentativas = 1;
    exibirMensamgemInical();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
