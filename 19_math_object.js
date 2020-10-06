// Math Object

console.table(Math);
console.log(Math.PI);

console.group("Math.abs");
console.log(
    Math.abs(-7.8) +
        " / Cantidad como tal sin considerar si es negativo o positivo"
);
console.log(Math.abs(7.8) + " ");
console.groupEnd("Math.abs");

console.group("Math Aproximacion");
console.log(
    Math.ceil(7.2) + " / Redondea el numero a su valor entero superior - ceil()"
);
console.log(
    Math.floor(7.2) +
        " / Redondea el numero a su valor entero inferior - floor()"
);
console.log(
    Math.round(7.2) +
        " / Redondea el numero a su valor entero mas cercano - round()"
);
console.log(
    Math.min(5, 10) + " / Muestra el valor inferior entre 5 y 10 - min()"
);
console.log(
    Math.max(5, 10) + " / Muestra el valor superior entre 5 y 10 - max()"
);
console.groupEnd("Math Aproximacion");

console.log(Math.sqrt(7) + " Raiz cuadrada - sqrt()");
console.log(Math.pow(2, 5) + " Elevacion de potencias - pow()");

// Mostrar el simbolo
console.log(Math.sign(-10) + " Muestra el signo - sign()");
console.log(Math.sign(10) + " Muestra el signo - sign()");

// Numero random
console.log(Math.random() + " / Otorga un valor random entre 0 y 1");
console.log(Math.round(Math.random() * 1000));
