function print() {
    console.log(this.Nombre);
}

this.Nombre = "Saray en Father";

(function printGlobal() {
    console.log(this.Nombre);
})();

const OBJ0 = {
    Nombre: "Saray en Bloque",
    print,
};

const OBJ1 = {
    Nombre: "Cesar en Bloque",
    print,
};

const OBJ2 = {
    Nombre: "Saray en Bloque",
    print: () => {
        console.log(this.Nombre)
    }
};

console.group('"This" en bloque');
OBJ0.print();
OBJ1.print();
console.groupEnd('"This" en bloque');
console.group('"This" fuera de bloque');
OBJ2.print();
console.groupEnd('"This" fuera de bloque');


