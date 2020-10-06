// Operadores Aritmeticos
// + - * / % ()
console.log("%cMath Operators", "color: yellow;");

let Arit0 = 5 + 5;

console.log(Arit0);

// Operador modulo "%", nos otorga el residuo de una division

let Arit1 = 5 % 2;

console.log(Arit1);

// Operadores relacionales
// > Mayor que
// < Menor que
// = Asignacion de variable
// >= Mayor o igual
// <= Menor o igual
// == Comparacion de valores
// === Igual valor e igual tipo
// != Diferente de
// !== No del mismo tipo o diferente

console.log(5 > 6);
console.log(5 < 6);
console.log(5 == 5);
console.log(5 != 5);
console.log(5 !== 5);
console.log(5 === 5);
console.log(5 >= 6);
console.log(5 <= 6);

let Incre0 = 1;
let Incre1 = Incre0;
let Incre2 = Incre0;
let Incre3 = Incre0;
let Incre4 = Incre0;
let Incre5 = Incre0;
let Incre6 = Incre0;

// Metodo tonto

Incre0 = Incre0 + 2;

// Metodo bueno

Incre1 += 2;

// Otros ejemplos

Incre2 /= 2;

Incre3 *= 2;

console.log(Incre0, Incre1, Incre2, Incre3);

// Operador unario

++Incre4; // Posho
--Incre5; // Posho
Incre6++; // Bueno

console.log(Incre4, Incre5, Incre6);

// Siempre utilizar el nombre de la variable y luego el operador unario

// Operadores logicos
console.log("%cLogical Operators", "color: yellow;");

// ! Not : Lo que es negativo lo vuelve falso y viceversa

console.log(!true, "Deberia ser verdadero");
console.log(!false, "Deberia ser falso");

// || Or : Cuando tengo dos o mas condiciones con que una se cumpla, es decir sea verdadera el Or validara

console.log(9 === 9 || "9" === 9); // Con que una sea verdadera arrojara un valor verdadero

// && And :

console.log(9 === 9 || 7 === 7); // Las condiciones deben ser iguales para que se cumpla

// Condicionales
console.log("%cConditionals", "color: yellow;");

let ifEdad = 17;

if (ifEdad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

if (ifEdad <= 18) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}

// Else - if con varias opciones

// Dejame dormir 0 - 5
// Buenos dias 6 - 11
// Buenas tardes 12 - 18
// Buenas noches 19 - 23

let Hora = 35;
let MMadrugada = "Dejame dormir";
let MDias = "Buenos dias";
let MTardes = "Buenas tardes";
let MNoches = "Buenas noches";

if (Hora >= 0 && Hora <= 5) {
    console.log(MMadrugada);
} else if (Hora >= 6 && Hora <= 11) {
    console.log(MDias);
} else if (Hora >= 12 && Hora <= 18) {
    console.log(MTardes);
} else if (Hora >= 19 && Hora <= 23) {
    console.log(MNoches);
} else if (Hora >= 24) {
    console.log("Fuera de rango horario");
}

// Operador ternario

let edadTernario = 25;

let eresEdad = edadTernario >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(eresEdad);
