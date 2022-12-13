// // elementoPai.removeChild(elementoFilho);
// document.getElementById("elementoOndeVoceEsta").firstElementChild.remove();

function newdiv(param1, param2, param3) {
  const novoElemento = document.createElement(param2);
  novoElemento.className(param3);
  document.getElementById(param1).appendChild(novoElemento);
}
