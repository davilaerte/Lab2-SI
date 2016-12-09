/*
 * UFCG - Ciencia Da Computacao
 * Arquivo functionsAgenda criado por Davi Laerte
 */

function addNovaAtividade() {
	
	// checa se a entrada e valida antes de criar a atividade.
	if(checkAddAtividade()) {
		criarAtividade();
	}
}


function criarAtividadeComTexto(texto) {
	var novaAtividade = document.createElement("li");
	var textoAtividade = document.createTextNode(texto);
	var minhaLista = document.getElementById("listaDeTarefas");
	var buttonClose = creatButtonAtividade();	
		
	novaAtividade.className = "list-group-item";
	novaAtividade.appendChild(textoAtividade);
	
		
	novaAtividade.appendChild(buttonClose);
	minhaLista.appendChild(novaAtividade);
	
	//adiciona evento de fechar atividade
	buttonClose.addEventListener("click", function () {
			minhaLista.removeChild(novaAtividade);
			changeProgressBar();
		});
	
	// adiciona evento para marcar atividade
	novaAtividade.addEventListener("click", function () {
			
			if(novaAtividade.className === "list-group-item") {
					novaAtividade.className = "list-group-item active";
			} else {
					novaAtividade.className = "list-group-item";
			}
			changeProgressBar();	
		});
	
}	

			
			
function criarAtividade() {
	var entrada = document.getElementById("novaAtividade");
	criarAtividadeComTexto(entrada.value);	
	entrada.value = "";
	changeProgressBar();
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
	var progresso = getNumeroAtividades() > 0 ? (getNumeroAtividadesFeitas()*TOTAL_PORCETAGEM)/getNumeroAtividades() : 0 ;
	progresso = progresso.toFixed(1);
	
	barProgress.style = "width:"+progresso+"%";
	barProgress.innerHTML = progresso+"%";
	
	//muda a cor da barra de progresso
	changeColorProgressBar(barProgress, progresso);
}

function getNumeroAtividades() {
	var listaDeAtividades = document.getElementsByClassName("list-group-item");
	return listaDeAtividades.length;
}

function getNumeroAtividadesFeitas () {
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


// checa se a nova atividade a ser adicionada é valida.
function checkAddAtividade() {
	var entrada = document.getElementById("novaAtividade");
	var buttonAddAtividade = document.getElementById("buttonAddAtividade"); 
		
	if(entrada.value === '' || entrada.value.length > 50){
		buttonAddAtividade.className = "btn btn-default disabled";
				
		return false;
	} else {
		buttonAddAtividade.className = "btn btn-default";
		
		return true;
	}	
}


function changeColorProgressBar(barProgress, progresso) {
	if(progresso >= 0 && progresso <= 25){
		barProgress.className = "progress-bar progress-bar-danger progress-bar-striped active";
	} else if (progresso > 25 && progresso <= 50) {
		barProgress.className = "progress-bar progress-bar-warning progress-bar-striped active";
	} else if (progresso > 50 && progresso <= 75) {
		barProgress.className = "progress-bar progress-bar-info progress-bar-striped active";
	} else {
		barProgress.className = "progress-bar progress-bar-success progress-bar-striped active";
	}
}



