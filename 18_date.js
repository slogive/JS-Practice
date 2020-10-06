// Date

console.log(Date());

let Date0 = new Date();

console.log(Date0);

// Dia del mes
console.log(Date0.getDate());

// Dia de la semana
console.log(Date0.getDay());

// Dia del mes
console.log(Date0.getMonth());

// Año - No util
console.log(Date0.getYear());

// Año
console.log(Date0.getFullYear());

// Horas
console.log(Date0.getHours());

// Minutos
console.log(Date0.getMinutes());

// Segundos
console.log(Date0.getSeconds());

// Milisegundos
console.log(Date0.getMilliseconds());

// To string - Better for the human eye

// Standar
console.log(Date0.toString());

// Functional
console.log(Date0.toDateString());

// Locate String
console.log(Date0.toLocaleString());

// Date in string format
console.log(Date0.toLocaleDateString());

// Hour in string
console.log(Date0.toLocaleTimeString());

// Time zone
console.log(Date0.getTimezoneOffset());

// UTC
console.log(Date0.getUTCDate() + " " + "/ Hora UTC");

// Date from 1970 to present
console.log(Date.now());

// Slogive Birthday
let SlogiveBirthday = new Date(2000, 10, 3);

console.log(SlogiveBirthday.toDateString());
