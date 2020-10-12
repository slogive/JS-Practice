const set = new Set([1, 2, 3, 3, 4, 5, 6, true, true, false]);

set.add("Mi nombre es Cesar");

console.log(set);
console.log(set.size);

for (item of set) {
    console.group("For of");
    console.log(item);
    console.groupEnd("For of");
}

set.forEach((item) => console.log(item));

set.delete(1);

console.group("Seleccionar dentro de set");
console.log(Array.from(set)[0]);
console.groupEnd("Seleccionar dentro de set");

console.group("Validar si existe dentro de la coleccion de datos");
console.log(set.has(2));
console.groupEnd("Validar si existe dentro de la coleccion de datos");

console.group("Limpiar coleccion de datos");
set.clear();
console.log(set);
console.groupEnd("Limpiar coleccion de datos");
