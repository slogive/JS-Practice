function* iterable() {
    yield "Hola 0";
    console.log("Hola 0");
    yield "Hola 1";
    console.log("Hola 1");
    yield "Hola 2";
    console.log("Hola 2");
    yield "Hola 3";
    console.log("Hola 3");
}

let iterador = iterable();

console.group("Iterable forIn");
for (let y of iterador) {
    console.log(iterador.next());
}
console.groupEnd("Iterable forIn");

const Arr = [...iterable()];
console.log(Arr);

function Cuadrado(valor) {
    setTimeout(() => {
        return console.log({ valor, resultado: valor * valor });
    }, 0 | (Math.random() * 1000));
}

Cuadrado(10);

function* generator() {
    console.log("Inicio Generador")
    yield Cuadrado(0);
    yield Cuadrado(1);
    yield Cuadrado(2);
    yield Cuadrado(3);
    yield Cuadrado(4);
    yield Cuadrado(5);
    console.log("Terminar Generador")
}

let gen = generator();

for (let y of gen) {
    console.log(y);
}