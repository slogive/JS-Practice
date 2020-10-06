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

const MethodUser = new Method0("Usuario", "Masculino", "Mediano");

console.log(MethodUser.getEdad);

MethodUser.setEdad = 15;

console.log(MethodUser.getEdad);
