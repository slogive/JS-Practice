// Function Cortocircuito
function CortoCircuito0(nombre) {
    nombre = nombre || "No Definido | OR";
    console.log(`Hola ${nombre}`);
}

// Definir valor predefinido para function que no recibe valor
function CortoCircuito1(nombre = "No Definido") {
    console.log(`Hola ${nombre}`);
}

console.group("Corto Circuito");
CortoCircuito0("Cesar");
CortoCircuito0();
console.log("<hr>");
CortoCircuito1("Cesar");
CortoCircuito1();
console.groupEnd("Corto Circuito");

// OR - Siempre ejecuta bajo el parametro positivo siempre que se encuentre el valor en el lado izquierdo;
console.group("OR");
console.group("OR - Valor Positivo");
console.log(true || "Valor diferente");
console.log(1 || "Valor diferente");
console.groupEnd("OR - Valor Positivo");

console.group("OR - Valor Negativo");
console.log(false || "Valor diferente");
console.log(NaN || "Valor diferente");
console.groupEnd("OR - Valor Negativo");
console.groupEnd("OR");

// OR - Siempre ejecuta bajo el parametro negavito siempre que se encuentre el valor en el lado izquierdo;
console.group("AND");
console.group("OR - Valor Positivo");
console.log(true && "Valor diferente");
console.log(1 && "Valor diferente");
console.groupEnd("OR - Valor Positivo");

console.group("OR - Valor Negativo");
console.log(false && "Valor diferente");
console.log(NaN && "Valor diferente");
console.groupEnd("OR - Valor Negativo");
console.groupEnd("OR");
