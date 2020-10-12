// Symbol

const NOMBRE = Symbol();
const SALUDAR = Symbol();
const EDAD = Symbol();

const persona = {
    [NOMBRE]: "Cesar",
    [EDAD]: 12
};

console.log(persona);

persona.NOMBRE = "Cesar Fonseca";

console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
    console.log("Funcion ejecutada desde llamada de function por Symbol()");
};

console.log(persona);

persona[SALUDAR]();

for (let property in persona) {
    console.log(property);
    console.log(persona[property]);
}

console.log(Object.getOwnPropertySymbols(persona));
