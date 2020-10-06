// Objetos Console

console.error("Error Basico");
console.warn("Advertencia Basica");
console.info("Mensaje infomativo basico");
console.log(console);

let ConsoleVar = [(Nombre = "Cesar"), (Apellido = "Fonseca"), (Edad = 19)];

console.log(
    `Mi nombre es ${ConsoleVar[Nombre]} ${ConsoleVar[Apellido]} y mi edad es ${ConsoleVar[Edad]}.`
);
console.log(
    `Mi nombre es %s %s y mi edad es %d.`,
    ConsoleVar[0],
    ConsoleVar[1],
    ConsoleVar[2]
);

console.log(document);
console.dir(document);

// Console Group
console.group();
console.log("POO");
console.log("Diseño Web");
console.log("CSS");
console.log("JavaScript");
console.groupEnd();

// Console Table
console.table(Object.entries(window).sort());

const NumConsole = [0, 1, 2, 3, 4],
    VocConsole = ["a", "b", "c", "d", "e"];

console.table(NumConsole, VocConsole);

const PerConsole = [(Nombre = "Usuario"), (Apellido = "Libre"), (Edad = 20)];

console.table(PerConsole);

// console.table()

var personArr = [
    {
        personId: 123,
        name: "Jhon",
        city: "Melbourne",
        phoneNo: "1234567890",
    },
    {
        personId: 124,
        name: "Amelia",
        city: "Sydney",
        phoneNo: "1234567890",
    },
    {
        personId: 125,
        name: "Emily",
        city: "Perth",
        phoneNo: "1234567890",
    },
    {
        personId: 126,
        name: "Abraham",
        city: "Perth",
        phoneNo: "1234567890",
    },
];

console.table(personArr);

// Console Time
console.time("Cuanto tarda en ejecutarse el codigo");
const TimeConsole = Array(1000000);

for (let i = 0; i < TimeConsole; i++) {
    TimeConsole[i] = i;
}
console.timeEnd("Cuanto tarda en ejecutarse el codigo");

// Console Count
for (let i = 0; i <= 10; i++) {
    console.count("Codigo For");
    console.log(i);
}

// Console Testing
let ConResX = 5,
    ConResY = 2,
    ConResM = "Se espera que X sea siempre menor a Y";

console.assert(ConResX < ConResY, { ConResX, ConResY, ConResM });
