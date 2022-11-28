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
console.log(message);
