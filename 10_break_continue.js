// Break & Continue
console.log("%cBreak & Continue | Break", "color: yellow;");

const bcNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let bcIndex = 0; bcIndex < bcNumbers.length; bcIndex++) {
    if (bcIndex === 5) {
        break;
    }
    console.log(bcNumbers[bcIndex]);
}

console.log("%cBreak & Continue | Continue", "color: yellow;");

for (let bcIndex = 0; bcIndex < bcNumbers.length; bcIndex++) {
    if (bcIndex === 5) {
        continue;
    }
    console.log(bcNumbers[bcIndex]);
}

// Destructuring
console.log("%cDestructuring", "color: yellow;");

let destructuringNumeros = [1, 2, 3];

const [
    DestructuringUno,
    DestructuringDos,
    DestructuringTres,
] = destructuringNumeros;

console.log(DestructuringUno, DestructuringDos, DestructuringTres);

//

let destructuringPersona = {
    desNombre: "Cesar",
    desApellido: "Fonseca",
    desEdad: 19,
};

let { desNombre, desApellido, desEdad } = destructuringPersona;

console.log(desNombre, desApellido, desEdad);

// Literal Objects
console.log("%cLiteral Objects", "color: yellow;");

let loNombre = "Cesar",
    loEdad = 19;

const loCesar = {
    loNombre,
    loEdad,
    loSaludar() {
        console.log(`Hola mi nombre es ${loNombre} y tengo ${loEdad}.`);
    },
};
