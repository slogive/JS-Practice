// For | Contiene la estructura necesaria para ejecutar loops de codigo con condicionales
console.log("%cFor", "color: yellow;");

for (let ForIndex = 0; ForIndex < 10; ForIndex++) {
    console.log("Eres el numero: " + ForIndex);
}

// For | Puede ejecutar una varible segun su largo

let ForNumeros = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let ForIndex = 0; ForIndex < ForNumeros.length; ForIndex++) {
    console.log("Cargando... " + ForNumeros[ForIndex] + "%");
}

// For in

const ForIn = {
    Nombre: "Cesar",
    Apellido: "Fonseca",
    Edad: 19,
};

for (const ForInPropiedad in ForIn) {
    console.log(`Key: ${ForInPropiedad}, Value: ${ForIn[ForInPropiedad]}`);
}

// For off

for (const ForOffElemento of ForNumeros) {
    console.log("ForOff: " + ForOffElemento + "%");
}

// For off | Recorre cada uno de los caracteres de la variable en cadena

let ForOffCadena = "Slogive Computing";

for (const ForOffCaracter of ForOffCadena) {
    console.log("For Off por caracteres" + " | " + ForOffCaracter);
}
