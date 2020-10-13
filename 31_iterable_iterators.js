const ITERABLE = "Hola mundo",
    ITERADOR = ITERABLE[Symbol.iterator]();

console.log(ITERABLE);
console.log(ITERADOR);

console.group("Iterable forIn");
for (item in ITERABLE) {
    console.log(ITERADOR.next());
}
console.groupEnd("Iterable forIn");
