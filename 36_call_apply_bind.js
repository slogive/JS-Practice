this.lugar = "Contexto Global"

function Saludar() {
    console.log(this.lugar);
}

const OBJ = {
    lugar: "Contexto Objeto"
}

this.lugar = "Contexto Global";

Saludar.call(OBJ);

function SaludarComplex(Saludo, Persona) {
    console.log(`${Saludo} ${Persona} en el lugar ${this.lugar}`);
}

SaludarComplex.call(OBJ, "Hola", "Cesar")
SaludarComplex.apply(OBJ, ["Hola", "Cesar"])

// .bind() sirve para vincular desde donde se debe ejecutar el codigo o carga de valor.