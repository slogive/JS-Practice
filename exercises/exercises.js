// JS Exercises solution

// Exercises #1
    // Exercise #1
    let Ej1Text0 = "Hola mi nombre es Cesar";

    export function Act1Ej1 () {
        console.log(Ej1Text0.length);
    }

    // Exercise #2
    let Ej1Text1 = "Hola mi nombre es Saray";

    export function Act1Ej2 () {
        console.log(Ej1Text1.slice(0, 4));
    }

        const Act1Ej2Meth2 = (CutTextCadena = "", CutTextLong = undefined) =>
        (!CutTextCadena)
        ? console.log("No ingresaste una cadena de texto")
        : (CutTextLong === undefined)
            ? console.log("No ingresaste la longitud a la cual cortar")
            : console.log(CutTextCadena.slice(0, CutTextLong));

        // CutText("That is an amazing example of how JavaScript will give me a better experience for practice and enlarge my knowledge about programming", 10)

    // Exercise #3
    let Ej1Text2 = "Hola mi nombre es Saray y tengo 18 años";
    export function Act1Ej3 () {
        console.log(Ej1Text2.split(' '));
    };

    // Exercise #4
    let Ej1Text3 = "Hola mi nombre es Saray";
    let Ej1Text3Times = 3;
    export function Act1Ej4 () {
        console.log(Ej1Text3.repeat(Ej1Text3Times)+ "");
    }

// Exercises #2
    // Exercise #1
    let Ej2Text1 =  "Hola mi nombre es Saray";
    export const Act2Ej1 = () => 
    (!Ej2Text1)
        ? console.log("Esta vacia la cadena de texto")
        : console.log(Ej2Text1.split("").reverse().join(""));

    // Exercise #2
    let Ej2Text2 = "Hola, este mundo es demasiado perfecto para ser real pero aun sigue siendo nuestro mundo, nuestro mundo es preciado por ser un mundo diferente a los demas mundos", Ej2Text2Buscar = "mundo";
    export const Act2Ej2 = () => {
        if (!Ej2Text2) console.log("Debes ingresar el texto en donde se buscara el valor");
        if (!Ej2Text2Buscar) console.log("Debes ingresar el valor a buscar dentro del texto");

        let i = 0, contar = 0;

        while (i !== -1) {
            i = Ej2Text2.indexOf(Ej2Text2Buscar, i);
            if (i !== -1) {
                i++;
                contar++;
            }
        }

        if (i === 1 && i < 2) console.log(`El texto "${Ej2Text2.slice(0, 10)}" contiene "${contar}" vez la palabra ${Ej2Text2Buscar}.`);
        if (contar > 0) console.log(`El texto "${Ej2Text2.slice(0, 10)}" contiene "${contar}" veces la palabra ${Ej2Text2Buscar}.`);
    }

    // Exercise #3
    
    export function Act2Ej3 (Ej2Text3 = "") {
        Ej2Text3 = prompt("").toLocaleLowerCase();

        let Ej2Text3Reves = Ej2Text3.split("").reverse().join("");

        return (Ej2Text3 === Ej2Text3Reves)
            ? console.log(`La palabra ${Ej2Text3} si es un palindromo.`)
            : console.log(`La palabra ${Ej2Text3} no es un palindromo.`);
    }
