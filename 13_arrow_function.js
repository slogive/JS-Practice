// Arrow Function
console.log("%cArrow Function", "color: yellow;");

// Normal Syntax

const Arrow0 = function () {
    console.log(`> Normal Syntax`);
};

Arrow0();

// Arrow Function Syntax

const Arrow1 = () => {
    console.log(`> Arrow Function Syntax`);
};

Arrow1();

// Arrow Function - Linea simple

const Arrow2 = () => console.log(`> Arrow Function - Linea simple`);

Arrow2();

// Arrow Function - Linea simple | Ejemplo con datos de usuario

const Arrow3 = (Nombre) =>
    console.log(`> Arrow Function - Linea simple: ${Nombre}`);

Arrow3("Cesar");

// Arrow Function - Linea simple | Dato simplicifado

const Arrow4 = (Nombre) =>
    console.log(`> Arrow Function - Linea simple: ${Nombre}`);

Arrow4("Cesar");

// Arrow Function - Syntax Basico

const Arrow5 = function (a, b) {
    return a + b;
};

console.log(Arrow5(5, 5));

// Arrow Function - Syntax Simplificado con Return

const Arrow6 = (a, b) => a + b;

console.log(Arrow6(5, 5));

// Arrow Function - Multilea

const Arrow7 = () => {
    console.log("Arrow Function - Multilea | 1");
    console.log("Arrow Function - Multilea | 2");
    console.log("Arrow Function - Multilea | 3");
};

console.log(Arrow7());

// Arrow Function - forEach
console.log("%cArrow Function - forEach", "color: yellow;");

const ArrowNumeros = [1, 2, 3];

// Arrow Function - Syntax complejo

ArrowNumeros.forEach(function (elemento, index) {
    console.log(`El elemento ${elemento} esta en la posicion ${index}.`);
});

// Arrow Function Syntax Simple a una linea

ArrowNumeros.forEach((elemento, index) =>
    console.log(`El elemento ${elemento} esta en la posicion ${index}.`)
);
