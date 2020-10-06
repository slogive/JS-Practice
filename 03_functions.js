// Functions
console.log("%cFunctions", "color: yellow;");

function FunctionReturnValue() {
    console.log(1);
    console.log(2);
    console.log(3);
    return "Esta funcion hace return de un valor visible imprimiendola como clase definida";
}

let FunctionReturn = FunctionReturnValue();

console.log(FunctionReturn);

// Declaracion de function

function Saludar(nombre, edad) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad}`);
}

Saludar("Cesar", 18);
Saludar();

// Functiones decladaras vs functions expresadas

function FunctionDeclarada() {
    console.log(
        "Puede ser llamada desde cualquier parte inclusive antes de que la function este declarada"
    );
}

FunctionDeclarada();

// Function Anonima
const FunctionExpresada = function () {
    console.log(
        "Esto es una function expresada, si invocamos esta function antes de su definicion JS nos dira que debemos declarla primera en el orden de la escritura del codigo.Bio__Button"
    );
};

// FunctionExpresada()

// Arrays
console.log("%cArrays", "color: yellow;");

// = []

const Array0 = [1, true, "Hola", ["A", "B", "C"]];

console.log(Array0);

// Array con valor en posicion especifica

console.log(Array0[2]);

// Array con valor en posicion especifica dentro de otro array

console.log(Array0[3][2]);

// Array de nuevo formato

const Array1 = Array.of("X", "Y", "Z");

console.log(Array1);

// Array con llenado

const Array2 = Array(100).fill(false);

console.log(Array2);

// Array viejo metodo D E P R E C A T E D

const Array3 = new Array();

console.log(Array3);

const Array4 = new Array("X", "Y", "Z", 1, 2, 3, false);

console.log(Array4);

//

const ArrayColores = ["Rojo", "Verde", "Azul"];

// Insertar valores dentro de la variable - Push agrega

ArrayColores.push("Gris");

// Insertar valores con pop - Pop remueve

ArrayColores.pop("Magenta");

console.log(ArrayColores);

// Ejecutar functions por list item

ArrayColores.forEach(function (el, index) {
    console.log(`<li id="${index}">${el}</li>`);
});

// forEach Prueba

// let toys = ["Balon", "Bate", "Remo"];
// toys.forEach(ToysFunction);
//
// function ToysFunction(item, index) {
// 	document.getElementById("toys").innerHTML += index + ":" + " " + item + "<br>";
// }

// Const con valores añadidos

const CesarInfo = {
    Nombre: "Cesar",
    Apellido: "Fonseca",
    Edad: "19",
    Pasatiempos: ["Programar", "Ver Series", "Leer Noticias", "Charlar"],
    Estado: "Casado",
    Contacto: {
        Email: "slogive@gmail.com",
        Twitter: "@Slogive0",
        Facebook: "@Slogive0",
    },
    Saludo: function () {
        console.log(`Hola :)`);
    },
    DecirNombre: function () {
        console.log(
            `Hola mi nombre es ${this.Nombre} ${this.Apellido} y tengo ${this.Edad}, agradeceria me contactaras por mi email: ${this.Contacto.Email}.`
        );
    },
};

console.log(CesarInfo);

// Ingresar a propiedad

console.log(CesarInfo["Nombre"]);
console.log(CesarInfo.Nombre);

// Multiple
console.log(CesarInfo[("Nombre", "Apellido")]);

// Array dentro de Array

console.log(CesarInfo.Contacto.Email);

console.log(CesarInfo.Saludo);

// Llamar function que este adentro de un array

CesarInfo.Saludo();
CesarInfo.DecirNombre();

// Llaves Object

console.log(Object.keys(CesarInfo));
console.log(Object.values(CesarInfo));
console.log(CesarInfo.hasOwnProperty("Nombre"));
