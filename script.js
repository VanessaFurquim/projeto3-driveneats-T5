// funções para seleção do prato.
function deselecionarPrato () {
    const pratoSelecionado = document.querySelector(".dish .selecionado");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }
}

function selecionarPrato (dishName) {
    deselecionarPrato ();
    const pratoSelecionado = document.querySelector("." + dishName);
    pratoSelecionado.classList.add("selecionado");
}


// funções para seleção da bebida.
function deselecionarBebida () {
    const bebidaSelecionada = document.querySelector(".drink .selecionado");
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }
}

function selecionarBebida (drinkName) {
    deselecionarBebida ();
    const bebidaSelecionada = document.querySelector("." + drinkName);
    bebidaSelecionada.classList.add("selecionado");
}

// funções para seleção da sobremesa.
function deselecionarSobremesa () {
    const sobremesaSelecionada = document.querySelector(".dessert .selecionado");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
    }
}

function selecionarSobremesa (dessertName) {
    deselecionarSobremesa ();
    const sobremesaSelecionada = document.querySelector("." + dessertName);
    sobremesaSelecionada.classList.add("selecionado");
}