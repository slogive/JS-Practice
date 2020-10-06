// POO | Programacion Orientada a Objetos

// > Clases: Modelo a seguir
// > Objetos: Instancia de una clase
//     Atributos: Caracteristica o propiedad del objeto (variables dentro de un objeto)
//     Metodos: Son las acciones que un objeto puede realizar (funciones dentro de un objeto)

const Prototipo0 = {
    Nombre: "Cesar",
    Sonar() {
        console.log("Hago sonidos");
    },
};

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
    };

    this.Saludar = function () {
        console.log(`El nombre es ${Nombre} y su genero es ${Genero}.`);
    };
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
};

FuncConst1.prototype.Saludar = function () {
    console.log(`El nombre es ${this} y su genero es ${this}.`);
};

const GF = "Femenino",
    GM = "Masculino";

const FuncConstText0 = new FuncConst0(
        "Snoopy - Func Constructora",
        GM,
        "Mediano"
    ),
    FuncConstText1 = new FuncConst0("Lola - Func Constructora", GF, "Grande");

const FuncConstText2 = new FuncConst1(
        "Snoopy - Func Constructora",
        GM,
        "Mediano"
    ),
    FuncConstText3 = new FuncConst1("Lola - Func Constructora", GF, "Grande");

console.log(FuncConstText0, FuncConstText1, FuncConstText2, FuncConstText3);

FuncConst1.prototype.Sonar();
FuncConst1.prototype.Saludar();

// Herencia prototipica

function Herencia0(Nombre, Genero, Tamanio) {
    this.Herencia1 = FuncConst1;
    this.Herencia1(Nombre, Genero);
    this.Tamanio = Tamanio;
}

Herencia0.prototype = new FuncConst1();
Herencia0.prototype.constructor = FuncConst1;
Herencia0.prototype.Sonar = function () {
    console.log(`Soy un perro y mi sonido es un ladrido`);
};

Herencia0.prototype.Saludar = function () {
    console.log(`Soy un perro y me gusta saludar a las personas`);
};

const HerenciaAnimal = new Herencia0(
    "Snoopy - Func Constructora",
    "M",
    "Mediano"
);

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
    constructor(Nombre, Genero, Tamanio) {
        super(Nombre, Genero);
        this.Tamanio = Tamanio;
    }

    Sonar() {
        console.log(`Estoy sonando | Class1`);
    }
    Saludar() {
        console.log(`Hola, te saludo | Class1`);
    }
}

const ClassP = "Pequeño",
    ClassM = "Pequeño",
    GM = "Masculino",
    GF = "Femenino",
    ClassMini = new Class0("Mimi", GF, ClassM),
    ClassMicky = new Class1("Micky", GM, ClassP);

console.log(Class0);

console.log(Class1);

ClassMini.Saludar();

ClassMicky.Saludar();
