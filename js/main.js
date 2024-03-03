let tempoInicial = $("#tempo-digitacao").text();
let campoDigitacao = $(".campo-digitacao");

$(document).ready(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	$("#btn-reiniciar").click(btnReiniciaJogo);
})

// Altera o tamanho das palavras e da frase a ser Digitada.
function atualizaTamanhoFrase() {
	let frase = $(".frase").text();
	let numeroPalavras = frase.split(" ").length;
	let tamanhoFrase = $("#tamanho-frase");

	tamanhoFrase.text(numeroPalavras);
	console.log(numeroPalavras);
}

// Catagem de caracteres e palavras
function inicializaContadores() {
	campoDigitacao.on("input", function(){
		let conteudo = campoDigitacao.val();

		let qtdPalavras = conteudo.split(/\S+/).length - 1;
		$("#contador-palavras").text(qtdPalavras);

		let qtdCaracteres = conteudo.length;
		$("#contador-caracteres").text(qtdCaracteres);
	});
}

// Contagem do tempo quando o focus estiver no textarea
function inicializaCronometro() {
	let tempoRestante = $("#tempo-digitacao").text();

	campoDigitacao.one("focus", function(){
		let cronometroID = setInterval(function(){
			tempoRestante--;
			console.log(tempoRestante)
			$("#tempo-digitacao").text(tempoRestante);
			if(tempoRestante == 0){
				campoDigitacao.attr("disabled", true); //desabilita o textarea
				clearInterval(cronometroID); //Para o cronometro em 0
			}
		}, 300)
	});
}

function btnReiniciaJogo() {
	console.log("btn-reiniciarJogo clicado");
	campoDigitacao.attr("disabled", false);
	campoDigitacao.val("");
	$("#contador-palavras").text("0");
	$("#contador-caracteres").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	inicializaCronometro();
}
