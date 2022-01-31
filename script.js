// Variáveis globais para habilitar botão de finalizar pedido.
let dishIsSelected = false;
let drinkIsSelected = false;
let dessertIsSelected = false;


// Funções para seleção do prato.
function unselectDish () {
    const selectedDish = document.querySelector(".dish .selected");
    if (selectedDish !== null) {
        selectedDish.classList.remove("selected");
    }
}

function selectDish (dishName) {
    unselectDish ();
    const selectedDish = document.querySelector("." + dishName);
    selectedDish.classList.add("selected");
    dishIsSelected = true;
    closeOrder ()
}


// Funções para seleção da bebida.
function unselectDrink () {
    const selectedDrink = document.querySelector(".drink .selected");
    if (selectedDrink !== null) {
        selectedDrink.classList.remove("selected");
    }
}

function selectDrink (drinkName) {
    unselectDrink ();
    const selectedDrink = document.querySelector("." + drinkName);
    selectedDrink.classList.add("selected");
    drinkIsSelected = true;
    closeOrder ()
}


// Funções para seleção da sobremesa.
function unselectDessert () {
    const selectedDessert = document.querySelector(".dessert .selected");
    if (selectedDessert !== null) {
        selectedDessert.classList.remove("selected");
    }
}

function selectDessert (dessertName) {
    unselectDessert ();
    const selectedDessert = document.querySelector("." + dessertName);
    selectedDessert.classList.add("selected");
    dessertIsSelected = true;
    closeOrder ()
}


// Funções do botão de fechar pedido.
function closeOrder () {
    if (dishIsSelected === true && drinkIsSelected === true && dessertIsSelected === true) {
        const enableButton = document.querySelector(".button-shape");
        enableButton.classList.add("enabledButton");
        const enabledButtoonText = document.querySelector(".button-shape h3");
        enabledButtoonText.innerHTML = "Finalizar pedido";
    }
}