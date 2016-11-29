//fecha buttons


function addAtividade() {
		creatAtividade();
		changeProgressBar();
		//addEventCloseButton();
}

function addEventCloseButton() {
	var listaElementos = document.getElementsByClassName("close");
	var i;
	
	for (i = 0; i < listaElementos.length; i++) {
					
	listaElementos[i].addEventListener("click", function () {
				var parent = this.parentNode;
				
				parent.parentNode.removeChild(parent);
				});
		}
	}
			
			
function creatAtividade() {
	var novaAtividade = document.createElement("li");
	var entrada = document.getElementById("novaAtividade");
	var textoAtividade = document.createTextNode(entrada.value);
	var minhaLista = document.getElementById("listaDeTarefas");
	var buttonClose = creatButtonAtividade();	
		
	novaAtividade.className = "list-group-item";
	novaAtividade.appendChild(textoAtividade);
	
	entrada.value = "";
	
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






