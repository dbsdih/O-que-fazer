var atividade_emCasa = ["Assistir um filme", "Pedir comida", "Jogar vídeo game", "Jogar cartas", "Pintar ou desenhar", "Meditar", "Dançar", "Ler um livro", "Preparar drinks", "Cozinhar algo gostoso", "Fazer fotos", "Trocar massagem", "Montar um quebra-cabeças", "Fazer origami", "Tomar um banho relaxante", "Replanejar um cômodo da casa", "Programar um viagem", "Cultivar o jardim", "Fazer uma guerra de travesseiro", "Fazer brigadeiro", "Acampar em um cômodo da casa", "praticar yoga", "Assistir uma palestra online", "ouvir um episódio de podcast", "Assistir um gênero de filme diferente", "Aproveitar um momento romântico", "Preparar aperitivos", "Fazer um jantar para convidados", "Fazer uma festa do pijama", "Jantar a luz de velas"];
var atividade_naRua = ["Acampar", "Passear de bicicleta", "Parque aquático", "Ir ao museu", "Ir ao cinema", "Fazer um piquenique", "Ir na cachoeira", "Ir ver o mar", "Sair para tomar sol", "Sair para correr", "Caminhar pelo bairro", "Passear com o pet", "Ver o nascer ou pôr do sol", "Ver a lua e as estrelas", "Ir no Karaokê", "Ir ao spa", "Experimentar um restaurante novo", "Ir a um baile ou festa", "Visitar um amigo ou parente", "Andar de patins ou skate", "Ir ao zoológico", "Ir no circo", "Andar a cavalo", "Ir ao teatro", "Ir à um show de stand-up", "Plantar uma flor ou árvore", "Sair para pescar", "Ir até uma ong", "Ir até um centro religioso", "Ir ao estádio de futebol", "Práticar um esporte novo", "Ir ao boliche", "Ir tomar sorvete", "Fazer artesanato ou tarefa manual", "Ir ao shopping", "Comprar utensilios para a casa", "Fazer uma trilha", "Visitar uma vinícula", "Ir ao parque de  diversões", "Nadar no rio", "Ir a um café", "Visitar uma fábrica de chocolates", "Conhecer uma instituição de ensino ou empresa", "Jogar sinuca", "Ir a uma livraria", "Fazer uma aula experimental de crossfit ou funcional", "Ir a uma feira", "Ir na casa mal assombrada", "Ir ao jardim botânico"];



var comida_emCasa = ["Pizza", "Sushi", "Italiana", "Hamburguer"];
var comida_naRua = ["Pizza", "Sushi", "Italiana", "Hamburguer"];

document.getElementById("conteudo").style.display = 'none'; 

function atividade(tipoAtividade){
	var atividade;
	
	if (tipoAtividade ==1){
		atividade = getRandom(0, atividade_emCasa.length);
		exibir_mensagem(atividade_emCasa[atividade]);
	}
	else if(tipoAtividade == 2){
		atividade = getRandom(0, atividade_naRua.length);
		exibir_mensagem(atividade_naRua[atividade]);
	}
	else if(tipoAtividade == 3){
		atividade = getRandom(0, atividade_naRua.length);
		exibir_mensagem(atividade_naRua[atividade]);
	}
	else if(tipoAtividade == 4){
		atividade = getRandom(0, atividade_naRua.length);
		exibir_mensagem(atividade_naRua[atividade]);
	}
	
	
}

function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}	

function exibir_mensagem(mensagem){
	
	esconder_botoes();
	
	var divMensagem = document.getElementById("conteudo");
	divMensagem.innerHTML = mensagem + '<span id="conteudo" class="btn-fechar-mensagem" onclick="fecharMensagem(event)">&times;</span>';
	divMensagem.style.display = 'block';
	
}

function fecharMensagem(event){
	event.currentTarget.parentElement.style.display = 'none';
	document.getElementById("botoes").style.display = 'block';
}

function esconder_botoes(){
	document.getElementById("botoes").style.display = 'none';
}

