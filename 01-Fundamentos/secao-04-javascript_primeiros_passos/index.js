const currentHour = 4;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour <= 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour <= 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour < 14 && currentHour > 11) {
  message = "Hora do almoço!!!";
} else if (currentHour < 11 && currentHour > 4) {
  message = "Hmmm, cheiro de café recém-passado";
} else {
  message = "sla cara";
}
//console.log(message);

let weekDay = "segunda-feira";

if (
  weekDay === "segunda-feira" ||
  weekDay === "terça-feira" ||
  weekDay === "quarta-feira" ||
  weekDay === "quinta-feira" ||
  weekDay === "sexta-feira"
) {
  //  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if (weekDay === "domingo" || weekDay === "sabado") {
  //  console.log("FINALMENTE, descanso merecido UwU");
}

let resultado = "dkaolds";

switch (resultado) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log("Informação incorreta");
}
