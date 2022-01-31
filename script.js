// Variáveis globais para habilitar botão de fechar pedido.
let dishIsSelected = false;
let drinkIsSelected = false;
let dessertIsSelected = false;


// Variáveis globais para mensagem de fechar pedido.
let chosenDish;
let chosenDrink;
let chosenDessert;
let dishPrice;
let drinkPrice;
let dessertPrice;
let totalAmount;


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

function whatsappMessage () {
    chosenDish = document.querySelector(".dish .selected h4").innerHTML;
    dishPrice = document.querySelector(".dish .selected h6").innerHTML.replace("R$","").replace(",",".");;
    chosenDrink = document.querySelector(".drink .selected h4").innerHTML;
    drinkPrice = document.querySelector(".drink .selected h6").innerHTML.replace("R$","").replace(",",".");;
    chosenDessert = document.querySelector(".dessert .selected h4").innerHTML;
    dessertPrice = document.querySelector(".dessert .selected h6").innerHTML.replace("R$","").replace(",",".");;

    totalAmount = parseInt((dishPrice) + parseInt(drinkPrice) + parseInt(dessertPrice));

    let message = `Olá, gostaria de fazer o pedido:
                   - Prato: ${chosenDish}
                   - Bebida: ${chosenDrink}
                   - Sobremesa: ${chosenDessert}
                   Total: R$ ${totalAmount.toFixed(2).replace('.',',')}`;

    let codedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/5521995156377?text=${codedMessage}`;
    window.location.href = whatsappLink;
}
