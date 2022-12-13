document.getElementById("elementoOndeVoceEsta").parentElement.style.color =
  "red"; // muda a cor
document.getElementById("primeiroFilhoDoFilho").innerHTML = "o mior";
document.getElementById("pai").firstElementChild; //acessa primeirofilho
document.getElementById("elementoOndeVoceEsta").previousElementSibling; //acessa primeiro filho
document.getElementById("elementoOndeVoceEsta").nextSibling; // acessa 'Atenção'
document.getElementById("elementoOndeVoceEsta").nextElementSibling; // acessa terceiroFilho
document.getElementById("pai").lastElementChild.previousElementSibling; //acessa terceiroFilho

document
  .getElementById("elementoOndeVoceEsta")
  .appendChild(document.createElement("p")); //cria filho
document
  .getElementById("elementoOndeVoceEsta")
  .appendChild(document.createElement("h1")); //cria irmao (falta terminar)

document
  .getElementById("primeiroFilhoDoFilho")
  .appendChild(document.createElement("main")); //cria filho

console.log(
  document.getElementsByTagName("main")
);
console.log(document.getElementById('pai'));

