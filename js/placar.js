function inserePlacar() {
	let corpoTabela = $(".placar").find("tbody");
	let usuario = "Otthon";
	let numPalavras = $("#contador-palavras").text();

	let linha = novaLinha(usuario, numPalavras);
	linha.find(".btn-remover").click(removeLinha);

	corpoTabela.prepend(linha);
}

function novaLinha(usuario, palavras) {
	let linha = $("<tr>");
	let colunaUsuario = $("<td>").text(usuario);
	let colunaPalavras = $("<td>").text(palavras);
	let colunaRemover = $("<td>");

	let link = $("<a>").attr("href", "#").attr("role", "button").addClass("btn btn-danger btn-remover");
	let icone = $("<i>").addClass("bi").addClass("bi-trash3-fill");

	// Icone dentro do <a>
	link.append(icone);

	// <a> dentro do <td>
	colunaRemover.append(link);

	// Os três <td> dentro do <tr>
	linha.append(colunaUsuario);
	linha.append(colunaPalavras);
	linha.append(colunaRemover);

	return linha;
}

function removeLinha(event){
	event.preventDefault();
	$(this).parent().parent().remove();
}
