/*

//Vars 
console.log("%cVars","color: yellow;");

let Test0 = {
    nombre: "Cesar",
    edad: 35
}

let colores = ["blanco","negro","rojo"];

Test0.correo = "slogive@gmail.com";

colores.push("naranja");

let nombre = "Cesar";

console.log(nombre, nombre.length, nombre.toLowerCase(), nombre.includes("Cesar")); // Longitud del string

////////////////

//Methods
console.log("%cMethods","color: yellow;");

//includes(""); | Busca dentro del string un boolean
//toLowerCase(""); | A minusculas
//toUpperCase(""); | A minusculas
//split(" ") | Separa
//trim() | Remueve los espacios del principio
//toFixed(1) | Formatear decimales "1" = Numero de decimales en el valor
//parseInt(var, number) | Entrega el valor entero
//parseFloat(var, number) | Entrega el valor fixed (por errores de valores flotantes)

//Concatenation
console.log("%cConcatenation","color: yellow;");

let Saludo = "Hola mi nombre es:" + " " + nombre
console.log(Saludo);

//Interpolacion
console.log("%cInterpolation","color: yellow;");

let Saludo2 = `Hola mi nombre es: ${nombre}.`;
console.log(Saludo2);

// Comillas invertidas
console.log("%cDouble Coutes Inverted","color: yellow;");

let ul = `<ul>
    <li>Test1</li>
    <li>Test2</li>
    <li>Test3</li>
</ul>
`

console.log(ul);

// Convert string to number values
console.log("%cConvert string to number","color: yellow;");

let NumString1 = 1;
let NumString2 = "5";

console.log(NumString1 + parseInt(NumString2));

// Booleanos
console.log("%cBooleans","color: yellow;");

let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f, Boolean(1), Boolean(0));

// 0 = false | 1 = true

// Truthy | Valores que tienden a ser verdaderos en JavaScript
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// Falsy | Valores que tienden a ser falsos en JavaScript
// if (false)
// if (null)
// if (undefined)
// if (0)
// if (-0)
// if (0n)
// if (NaN)
// if ("")

// Indefined and NaN

// let indefinida;
// let nula = null;
// let NaN;
// 
// console.log(indefinida, nula);

// Functions
console.log("%cFunctions","color: yellow;");

function FunctionReturnValue() {
    console.log(1)
    console.log(2)
    console.log(3)
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
    console.log("Puede ser llamada desde cualquier parte inclusive antes de que la function este declarada");
}

FunctionDeclarada();

// Function Anonima 
const FunctionExpresada = function() {
    console.log("Esto es una function expresada, si invocamos esta function antes de su definicion JS nos dira que debemos declarla primera en el orden de la escritura del codigo.Bio__Button")
}

// FunctionExpresada()

// Arrays
console.log("%cArrays","color: yellow;");

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

ArrayColores.forEach(function(el, index) {
    console.log(`<li id="${index}">${el}</li>`)
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
        Facebook: "@Slogive0"
    },
    Saludo: function() {
        console.log(`Hola :)`);
    },
    DecirNombre: function() {
        console.log(`Hola mi nombre es ${this.Nombre} ${this.Apellido} y tengo ${this.Edad}, agradeceria me contactaras por mi email: ${this.Contacto.Email}.`); 
    }
}

console.log(CesarInfo);

    // Ingresar a propiedad

    console.log(CesarInfo["Nombre"]);
    console.log(CesarInfo.Nombre);

        // Multiple
        console.log(CesarInfo["Nombre", "Apellido"]);

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

// Operadores Aritmeticos
// + - * / % ()
console.log("%cMath Operators","color: yellow;");

let Arit0 = 5 + 5;

console.log(Arit0);

    // Operador modulo "%", nos otorga el residuo de una division

    let Arit1 = 5 % 2;

    console.log(Arit1);

// Operadores relacionales
// > Mayor que
// < Menor que
// = Asignacion de variable
// >= Mayor o igual
// <= Menor o igual
// == Comparacion de valores
// === Igual valor e igual tipo
// != Diferente de
// !== No del mismo tipo o diferente 

console.log(5 > 6);
console.log(5 < 6);
console.log(5 == 5);
console.log(5 != 5);
console.log(5 !== 5);
console.log(5 === 5);
console.log(5 >= 6);
console.log(5 <= 6);

let Incre0 = 1;
let Incre1 = Incre0;
let Incre2 = Incre0;
let Incre3 = Incre0;
let Incre4 = Incre0;
let Incre5 = Incre0;
let Incre6 = Incre0;

// Metodo tonto

Incre0 = Incre0 + 2;

// Metodo bueno

Incre1 += 2;

// Otros ejemplos

Incre2 /= 2;

Incre3 *= 2;

console.log(Incre0, Incre1, Incre2, Incre3);

// Operador unario

++Incre4; // Posho
--Incre5; // Posho
Incre6++; // Bueno

console.log(Incre4, Incre5, Incre6);

// Siempre utilizar el nombre de la variable y luego el operador unario

// Operadores logicos 
console.log("%cLogical Operators","color: yellow;");

// ! Not : Lo que es negativo lo vuelve falso y viceversa 

console.log(!true, "Deberia ser verdadero");
console.log(!false, "Deberia ser falso");

// || Or : Cuando tengo dos o mas condiciones con que una se cumpla, es decir sea verdadera el Or validara

console.log((9 === 9) || ("9" === 9)); // Con que una sea verdadera arrojara un valor verdadero

// && And : 

console.log((9 === 9) || (7 === 7)); // Las condiciones deben ser iguales para que se cumpla

// Condicionales
console.log("%cConditionals","color: yellow;");

let ifEdad = 17;

if ( ifEdad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

if ( ifEdad <= 18) {
    console.log("Eres menor de edad")
} else {
    console.log("Eres mayor de edad")
}

// Else - if con varias opciones

// Dejame dormir 0 - 5
// Buenos dias 6 - 11
// Buenas tardes 12 - 18
// Buenas noches 19 - 23

let Hora = 35;
let MMadrugada = "Dejame dormir";
let MDias = "Buenos dias";
let MTardes = "Buenas tardes";
let MNoches = "Buenas noches";

if (Hora >= 0 && Hora <= 5) {
    console.log(MMadrugada);
} else if (Hora >= 6 && Hora <= 11) {
    console.log(MDias);
} else if (Hora >= 12 && Hora <= 18) {
    console.log(MTardes);
} else if (Hora >= 19 && Hora <= 23) {
    console.log(MNoches);
} else if (Hora >= 24) {
    console.log("Fuera de rango horario");
}

// Operador ternario

let edadTernario = 25;

let eresEdad = (edadTernario >= 18) ? "Eres mayor de edad" : "Eres menor de edad";

console.log(eresEdad);

// Switch - Case

console.log("Switch - Case");

// let Domingo = 0;
// let Lunes = 1;
// let Martes = 2;
// let Miercoles = 3;
// let Jueves = 4;
// let Viernes = 5; 
// let Sabado = 6;

console.log("Switch")
console.log("%cSwitch","color: yellow;");

let SDia = 0;

switch (SDia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4: 
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("Error");
        break;
}

// While | Ejecuta el codigo si la condicion se cumple
console.log("%cWhile","color: yellow;");

let WhileContar = 0;

// while (WhileContar < 10) {
//     console.log("While " + WhileContar);
//     WhileContar++;
// }

// Do While | Ejecuta el codigo una vez y luego si verifica si la condicon se cumple

// do {
//     console.log("Do While " + WhileContar);
//     WhileContar++;
// } while (WhileContar < 10);

// For | Contiene la estructura necesaria para ejecutar loops de codigo con condicionales
console.log("%cFor","color: yellow;");

for (let ForIndex = 0; ForIndex < 10; ForIndex++) {
    console.log("Eres el numero: " + ForIndex);
}

    // For | Puede ejecutar una varible segun su largo

    let ForNumeros = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    for (let ForIndex = 0; ForIndex < ForNumeros.length; ForIndex++) {
        console.log("Cargando... " + ForNumeros[ForIndex] + "%");
    }

// For in

const ForIn = {
    Nombre: "Cesar",
    Apellido: "Fonseca",
    Edad: 19
}

for (const ForInPropiedad in ForIn) {
    console.log(`Key: ${ForInPropiedad}, Value: ${ForIn[ForInPropiedad]}`);
}

// For off

for (const ForOffElemento of ForNumeros) {
    console.log("ForOff: " + ForOffElemento + "%");
}

    // For off | Recorre cada uno de los caracteres de la variable en cadena

    let ForOffCadena = "Slogive Computing";

    for (const ForOffCaracter of ForOffCadena) {
        console.log("For Off por caracteres" + " | " + ForOffCaracter);
    }

// Try Catch Finally | Busqueda de errores en JavaScript

try {
    console.log("En el try se agrega el codigo a evaluar");
} catch {
    console.log("Catch captura cualquier error surgido o lanzado en el try");
} finally {
    console.log("Finally se ejecutara siempre al final de un bloque try-catch");
}

    // Try Catch Finally | Ejemplo

    try {
        console.log("En el try se agrega el codigo a evaluar");

        noExiste;

    } catch (error) {
        console.log("Catch captura cualquier error surgido o lanzado en el try");

        console.log(error);
    } finally {
        console.log("Finally se ejecutara siempre al final de un bloque try-catch");
    }

    // Try Catch Finally | Ejemplo con mensaje personalizado de error

    try {
        let TCFError = "Y";

        if (isNaN(TCFError)) {
            throw new Error("El caracter introducido no es un numero.")
        }

        console.log(TCFError * TCFError);
    } catch (error) {
        console.log(`Se produjo el siguiente error: ${error}`);
    }

// Prompt

function PromptFunct() {
    let EdadPrompt = prompt("How old are you?");
    console.log(EdadPrompt);
}

// console.table()

var personArr = [
    {
     "personId": 123,
     "name": "Jhon",
     "city": "Melbourne",
     "phoneNo": "1234567890"
    },
    {
     "personId": 124,
     "name": "Amelia",
     "city": "Sydney",
     "phoneNo": "1234567890"
    },
    {
     "personId": 125,
     "name": "Emily",
     "city": "Perth",
     "phoneNo": "1234567890"
    },
    {
     "personId": 126,
     "name": "Abraham",
     "city": "Perth",
     "phoneNo": "1234567890"
    }
];
    
console.table(personArr);

// Break & Continue
console.log("%cBreak & Continue | Break","color: yellow;");

const bcNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let bcIndex = 0; bcIndex < bcNumbers.length; bcIndex++) {
    if (bcIndex === 5) {
        break;
    }
    console.log(bcNumbers[bcIndex]);
}

console.log("%cBreak & Continue | Continue","color: yellow;");

for (let bcIndex = 0; bcIndex < bcNumbers.length; bcIndex++) {
    if (bcIndex === 5) {
        continue;
    }
    console.log(bcNumbers[bcIndex]);
}

// Destructuring
console.log("%cDestructuring","color: yellow;");

let destructuringNumeros = [1, 2, 3];

const [DestructuringUno, DestructuringDos, DestructuringTres] = destructuringNumeros;

console.log(DestructuringUno, DestructuringDos, DestructuringTres);
   
    //
    
let destructuringPersona = {
    desNombre: "Cesar",
    desApellido: "Fonseca",
    desEdad: 19
}

let {desNombre, desApellido, desEdad} = destructuringPersona;

console.log(desNombre, desApellido, desEdad);

// Literal Objects
console.log("%cLiteral Objects","color: yellow;");

let loNombre = "Cesar", loEdad = 19;

const loCesar = {
    loNombre,
    loEdad,
    loSaludar() {
        console.log(`Hola mi nombre es ${loNombre} y tengo ${loEdad}.`);
    }
}

console.log(loCesar);
loCesar.loSaludar();

//Rest | Sirve para añadir valores de forma dinamica
console.log("%cRest","color: yellow;");

function restsuma(restA, restB, ...restC) {
    let restresultado = restA + restB;

    restC.forEach(function(n) {
        restresultado += n
    })

    return restresultado;
}

console.log(restsuma(1, 2, 5, 8));

// Spread Operator
console.log("%cSpread Operator","color: yellow;");

const spreadArr0 = [1, 2, 3, 4, 5], spreadArr1 = [6, 7, 8, 9, 0];

console.log(spreadArr0, spreadArr1);

const spreadArr2 = [...spreadArr0, ...spreadArr1];

console.log(spreadArr2);

// Arrow Function
console.log("%cArrow Function","color: yellow;");

    // Normal Syntax

    const Arrow0 = function () {
        console.log(`> Normal Syntax`);
    }

    Arrow0();

    // Arrow Function Syntax

    const Arrow1 = () => {
        console.log(`> Arrow Function Syntax`);
    }

    Arrow1();

    // Arrow Function - Linea simple

    const Arrow2 = () => console.log(`> Arrow Function - Linea simple`);

    Arrow2();

    // Arrow Function - Linea simple | Ejemplo con datos de usuario

    const Arrow3 = (Nombre) => console.log(`> Arrow Function - Linea simple: ${Nombre}`);

    Arrow3("Cesar");

    // Arrow Function - Linea simple | Dato simplicifado

    const Arrow4 = Nombre => console.log(`> Arrow Function - Linea simple: ${Nombre}`);

    Arrow4("Cesar");

    // Arrow Function - Syntax Basico

    const Arrow5 = function (a,b) {
        return a + b;
    }

    console.log(Arrow5(5,5));

    // Arrow Function - Syntax Simplificado con Return

    const Arrow6 = (a,b) => a + b;

    console.log(Arrow6(5,5))

    // Arrow Function - Multilea

    const Arrow7 = () => {
        console.log("Arrow Function - Multilea | 1");
        console.log("Arrow Function - Multilea | 2");
        console.log("Arrow Function - Multilea | 3");
    }

    console.log(Arrow7());

// Arrow Function - forEach
console.log("%cArrow Function - forEach","color: yellow;");

    const ArrowNumeros = [1, 2, 3];

    // Arrow Function - Syntax complejo

    ArrowNumeros.forEach ( function (elemento, index) {
        console.log(`El elemento ${elemento} esta en la posicion ${index}.`);
    });

    // Arrow Function Syntax Simple a una linea

    ArrowNumeros.forEach((elemento, index) => console.log(`El elemento ${elemento} esta en la posicion ${index}.`));

// This
console.log("%cThis","color: yellow;");

    // This - Function

    function This() {
        console.log(this);
    }

    This();

    // This - Objeto | Especifo del string

    const This0 = {
        Nombre: "Cesar",
        Apellido: "Fonseca",
        This0Func: function () {
            console.log(this);
        }
    }

    This0.This0Func();

    // This - Objeto | Reconoce la herencia

    const This1 = {
        Nombre: "Cesar",
        Apellido: "Fonseca",
        This1Func: () => {
            console.log(this);
        }
    }

    This1.This1Func();

    // This - Objeto | Especifico del string - nuevo metodo

    // This - Objeto | Especifo del string

    const This2 = {
        Nombre: "Cesar",
        Apellido: "Fonseca",
        This2Func() {
            console.log(this);
        }
    }

    This2.This2Func();

// POO | Programacion Orientada a Objetos

    // > Clases: Modelo a seguir
    // > Objetos: Instancia de una clase
    //     Atributos: Caracteristica o propiedad del objeto (variables dentro de un objeto)
    //     Metodos: Son las acciones que un objeto puede realizar (funciones dentro de un objeto)

    const Prototipo0 = {
        Nombre: "Cesar",
        Sonar() {
            console.log("Hago sonidos");
        }
    }

    console.log(Prototipo0);

    // Un prototipo basico es un objeto

    // Function Constructora

        // Memory Problem

        function FuncConst0(Nombre, Genero) {

            // Atributos
            this.Nombre = Nombre;
            this.Genero = Genero;

            // Metodos
            this.Sonar = function () {
                console.log("Estoy vivo y hago sonidos");
            }

            this.Saludar = function () {
                console.log(`El nombre es ${Nombre} y su genero es ${Genero}.`);
            }
        }

        // Memory Fixed - De esta manera evitamos duplicar los metodos en la funcion constructora

        function FuncConst1(Nombre, Genero) {

            // Atributos
            this.Nombre = Nombre;
            this.Genero = Genero;

        }

            // Metodos
            FuncConst1.prototype.Sonar = function () {
                console.log("Estoy vivo y hago sonidos");
            }

            FuncConst1.prototype.Saludar = function () {
                console.log(`El nombre es ${this} y su genero es ${this}.`);
            }

    const GF = "Femenino", GM = "Masculino";

    const FuncConstText0 = new FuncConst0("Snoopy - Func Constructora",GM,"Mediano"), FuncConstText1 = new FuncConst0("Lola - Func Constructora",GF,"Grande");

    const FuncConstText2 = new FuncConst1("Snoopy - Func Constructora",GM,"Mediano"), FuncConstText3 = new FuncConst1("Lola - Func Constructora",GF,"Grande");

    console.log(FuncConstText0, FuncConstText1, FuncConstText2, FuncConstText3);

    FuncConst1.prototype.Sonar();
    FuncConst1.prototype.Saludar();

// Herencia prototipica

function Herencia0 (Nombre, Genero, Tamanio) {
    this.Herencia1 = FuncConst1;
    this.Herencia1(Nombre, Genero);
    this.Tamanio = Tamanio
}

Herencia0.prototype = new FuncConst1();
Herencia0.prototype.constructor = FuncConst1;
Herencia0.prototype.Sonar = function () {
    console.log(`Soy un perro y mi sonido es un ladrido`);

}

Herencia0.prototype.Saludar = function () {
    console.log(`Soy un perro y me gusta saludar a las personas`);
}

const HerenciaAnimal = new Herencia0("Snoopy - Func Constructora","M","Mediano");

console.log(HerenciaAnimal);

// Class

    // Class- Constructor

class Class0 {
    constructor(Nombre, Genero, Tamanio) {
        this.Nombre = Nombre;
        this.Genero = Genero;
        this.Tamanio = Tamanio;
    }

    Sonar() {
        console.log(`Hola, estoy haciendo ruido | Class0`);
    }
    Saludar() {
        console.log(`Hola, te saludo | Class0`);
    }
} 

class Class1 extends Class0 {
    constructor (Nombre, Genero, Tamanio) {
        super(Nombre, Genero);
        this.Tamanio = Tamanio;
    }
    
    Sonar () {
        console.log(`Estoy sonando | Class1`);
    }
    Saludar () {
        console.log(`Hola, te saludo | Class1`);
    }
}  

const ClassP = "Pequeño", ClassM = "Pequeño", GM = "Masculino", GF = "Femenino", ClassMini = new Class0("Mimi", GF, ClassM), ClassMicky = new Class1("Micky", GM, ClassP);

console.log(Class0);

console.log(Class1);

ClassMini.Saludar();

ClassMicky.Saludar();

// Metodos estaticos, getters y setters

class Method0 {
    constructor(Nombre, Genero, Tamanio) {
        this.Nombre = Nombre;
        this.Genero = Genero;
        this.Tamanio = Tamanio;
        this.Edad = null;
    }

    MethodSonar() {
        console.log(`Hola, estoy haciendo ruido | Class0`);
    }
    MethodSaludar() {
        console.log(`Hola, te saludo | Class0`);
    }

    // Setter
    set setEdad(Edad) {
        this.Edad = Edad;
    }

    // Getter
    get getEdad() {
        return this.Edad;
    }
} 

const MethodUser = new Method0 ("Usuario", "Masculino", "Mediano")

console.log(MethodUser.getEdad);

MethodUser.setEdad = 15;

console.log(MethodUser.getEdad);

// Objetos Console

console.error("Error Basico");
console.warn("Advertencia Basica");
console.info("Mensaje infomativo basico");
console.log(console);

let ConsoleVar = [
    Nombre = "Cesar",
    Apellido = "Fonseca",
    Edad = 19
];

console.log(`Mi nombre es ${ConsoleVar[Nombre]} ${ConsoleVar[Apellido]} y mi edad es ${ConsoleVar[Edad]}.`);
console.log(`Mi nombre es %s %s y mi edad es %d.`, ConsoleVar[0], ConsoleVar[1], ConsoleVar[2]);

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

    const PerConsole = [
        Nombre = "Usuario",
        Apellido = "Libre",
        Edad = 20
    ];

    console.table(PerConsole);

*/

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
    let ConResX = 5, ConResY = 2, ConResM = "Se espera que X sea siempre menor a Y";

    console.assert(ConResX < ConResY, {ConResX, ConResY, ConResM});

// Date

console.log(Date());  

let Date0 = new Date();

console.log(Date0);

    // Dia del mes
    console.log(Date0.getDate());

    // Dia de la semana
    console.log(Date0.getDay());

    // Dia del mes
    console.log(Date0.getMonth());
    
    // Año - No util
    console.log(Date0.getYear());

    // Año
    console.log(Date0.getFullYear());
    
    // Horas
    console.log(Date0.getHours());

    // Minutos
    console.log(Date0.getMinutes());

    // Segundos
    console.log(Date0.getSeconds());

    // Milisegundos
    console.log(Date0.getMilliseconds());
    
// To string - Better for the human eye
    
    // Standar
    console.log(Date0.toString());
    
    // Functional
    console.log(Date0.toDateString());
    
    // Locate String
    console.log(Date0.toLocaleString());

    // Date in string format
    console.log(Date0.toLocaleDateString());

    // Hour in string
    console.log(Date0.toLocaleTimeString());
    
    // Time zone
    console.log(Date0.getTimezoneOffset());

    // UTC
    console.log(Date0.getUTCDate()+" "+"/ Hora UTC");

    // Date from 1970 to present
    console.log(Date.now())

    // Slogive Birthday
    let SlogiveBirthday = new Date(2000, 10, 3);

    console.log(SlogiveBirthday.toDateString());

// Math Object

console.table(Math);
console.log(Math.PI);

console.group("Math.abs");
console.log(Math.abs(-7.8)+" / Cantidad como tal sin considerar si es negativo o positivo");
console.log(Math.abs(7.8)+" ");
console.groupEnd("Math.abs")

console.group("Math Aproximacion");
console.log(Math.ceil(7.2)+" / Redondea el numero a su valor entero superior - ceil()");
console.log(Math.floor(7.2)+" / Redondea el numero a su valor entero inferior - floor()");
console.log(Math.round(7.2)+" / Redondea el numero a su valor entero mas cercano - round()");
console.log(Math.min(5, 10)+" / Muestra el valor inferior entre 5 y 10 - min()");
console.log(Math.max(5, 10)+" / Muestra el valor superior entre 5 y 10 - max()");
console.groupEnd("Math Aproximacion");

console.log(Math.sqrt(7)+" Raiz cuadrada - sqrt()");
console.log(Math.pow(2, 5)+" Elevacion de potencias - pow()");

    // Mostrar el simbolo
    console.log(Math.sign(-10)+" Muestra el signo - sign()");
    console.log(Math.sign(10)+" Muestra el signo - sign()");

    // Numero random
    console.log(Math.random()+" / Otorga un valor random entre 0 y 1");
    console.log(Math.round(Math.random() * 1000));

// Function Cortocircuito
function CortoCircuito0 (nombre) {
    nombre = nombre || "No Definido | OR";
    console.log(`Hola ${nombre}`);
}

    // Definir valor predefinido para function que no recibe valor
    function CortoCircuito1 (nombre = "No Definido") {
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

// Alert - Confirm - Prompt

// alert("Se abrira una nueva pestaña");
// confirm("Si o no");
// prompt("Ingresa el valor");

// let ClassAlert = alert("Se abrira una nueva pestaña"), ClassConfirm = confirm("Si o no"), ClassPrompt = prompt("Ingresa el valor");

// console.log(ClassAlert);
// console.log(ClassConfirm);
// console.log(ClassPrompt);

// Expresiones regulares

let ExpRegText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let ExpReg0 = RegExp("lorem","ig"), ExpReg1 = /lorem/ig, ExpReg2 = /lorem{1,3}/ig, ExpReg3 = /lorem{3}/ig, ExpReg4 = /lorem{3,}/ig;

console.group("Expresiones Regulares");
console.log(ExpReg0.test(ExpRegText));
console.log(ExpReg0.exec(ExpRegText));

console.log(ExpReg1.test(ExpRegText));
console.log(ExpReg1.exec(ExpRegText));

console.log(ExpReg2.test(ExpRegText)+" / Rango de repeticiones entre x & y");
console.log(ExpReg3.test(ExpRegText)+" / Rango de repeticiones base definido ");
console.log(ExpReg4.test(ExpRegText)+" / Rango de repeticiones base definido con infinidad");
console.groupEnd("Expresiones Regulares");

// Funciones Anonimas Auto-ejecutables - Immediate Invoke Function Expression - IIFE
(function () {
    console.log("My first IIFE")
})();

// IIFE with variables
(function (d, w, c) {
    console.log("My second IIFE")
    console.log(d, w, c)
})(document, window, console);

// Kind of IIFE

// Classic
(function () {
    console.group("Kinds of IIFE")
    console.log("Soy una IIFE Clasica");
})();

// Version Crockford
((function () {
    console.log("Soy una IIFE Crockford");
})());

// Version Unaria
+function () {
    console.log("Soy una IIFE Unaria");
}();

// Version Facebook
!function () {
    console.log("Soy una IIFE Facebook");
    console.groupEnd("Kinds of IIFE");
}();





    

