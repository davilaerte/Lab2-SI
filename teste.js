//fecha buttons



function addAtividade() {
		
		if(blockButton()) {
			creatAtividade();
			changeProgressBar();
		}
}

function criarAtividadeComNome(text) {
	var novaAtividade = document.createElement("li");
	var textoAtividade = document.createTextNode(text);
	var minhaLista = document.getElementById("listaDeTarefas");
	var buttonClose = creatButtonAtividade();	
		
	novaAtividade.className = "list-group-item";
	novaAtividade.appendChild(textoAtividade);
	
		
	novaAtividade.appendChild(buttonClose);
	minhaLista.appendChild(novaAtividade);
	
	//adiciona evento de fechar atividade
	buttonClose.addEventListener("click", function () {
			EventFecharAtividade(minhaLista, novaAtividade);
		});
	
	// adiciona evento para marcar atividade
	novaAtividade.addEventListener("click", function () {
			EventMarcarAtividade(novaAtividade);	
		});
	
	
}	

			
			
function creatAtividade() {
	var entrada = document.getElementById("novaAtividade");
	criarAtividadeComNome(entrada.value);	
	entrada.value = "";
}

function creatButtonAtividade()	{
	var button = document.createElement("span");
	var imageButton = document.createElement("i");
	
	button.className = "close";
	imageButton.className = "glyphicon glyphicon-remove-circle";
	
	button.appendChild(imageButton);
	
	return button;
}

function changeProgressBar() {
	var TOTAL_PORCETAGEM = 100;
	var barProgress = document.getElementById("barraDeProgresso");
	var progresso = getNumberAtividades() > 0 ? (getNumberAtividadesFeitas()*TOTAL_PORCETAGEM)/getNumberAtividades() : 0 ;
	progresso = progresso.toFixed(1);
	
	barProgress.style = "width:"+progresso+"%";
	barProgress.innerHTML = progresso+"%";
}

function getNumberAtividades() {
	var listaDeAtividades = document.getElementsByClassName("list-group-item");
	return listaDeAtividades.length;
}

function getNumberAtividadesFeitas () {
	var listaDeAtividades = document.getElementsByClassName("list-group-item active");
	return listaDeAtividades.length;
}

function limparAtividades() {
	var elemento = document.getElementById("listaDeTarefas");	
	
	while (elemento.firstChild) {
		elemento.removeChild(elemento.firstChild);
	}
	
	changeProgressBar();
}

function blockButton() {
	var entrada = document.getElementById("novaAtividade");
	var buttonAddAtividade = document.getElementById("buttonAddAtividade"); 
	
	if(entrada.value === ''){
		buttonAddAtividade.className = "btn btn-default disabled";
		
		return false;
	} else {
		buttonAddAtividade.className = "btn btn-default";
		
		return true;
	}	
}

function EventMarcarAtividade (novaAtividade) {
	
	if(novaAtividade.className === "list-group-item") {
	
		novaAtividade.className = "list-group-item active";
	} else {
	
		novaAtividade.className = "list-group-item";
	}
			
	changeProgressBar();	
}

function EventFecharAtividade(minhaLista, novaAtividade) {
	minhaLista.removeChild(novaAtividade);
	changeProgressBar();
}






