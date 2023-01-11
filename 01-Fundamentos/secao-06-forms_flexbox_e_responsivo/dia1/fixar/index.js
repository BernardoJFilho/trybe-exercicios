// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function botao(event) {
    event.preventDefault();
}
HREF_LINK.addEventListener('click', botao);

INPUT_CHECKBOX.addEventListener('click', botao);

function letraA(event) {
    event.preventDefault('a');
}

INPUT_TEXT.addEventListener('keypress', letraA);