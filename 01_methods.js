//Methods
console.log("%cMethods", "color: yellow;");

// includes(""); | Busca dentro del string un boolean
// toLowerCase(""); | A minusculas
// toUpperCase(""); | A minusculas
// split(" ") | Separa
// trim() | Remueve los espacios del principio
// toFixed(1) | Formatear decimales "1" = Numero de decimales en el valor
// parseInt(var, number) | Entrega el valor entero
// parseFloat(var, number) | Entrega el valor fixed (por errores de valores flotantes)

//Concatenation
console.log("%cConcatenation", "color: yellow;");

let Saludo = "Hola mi nombre es:" + " " + nombre;
console.log(Saludo);

//Interpolacion
console.log("%cInterpolation", "color: yellow;");

let Saludo2 = `Hola mi nombre es: ${nombre}.`;
console.log(Saludo2);

// Comillas invertidas
console.log("%cDouble Coutes Inverted", "color: yellow;");

let ul = `<ul>
    <li>Test1</li>
    <li>Test2</li>
    <li>Test3</li>
</ul>
`;

console.log(ul);

// Convert string to number values
console.log("%cConvert string to number", "color: yellow;");

let NumString1 = 1;
let NumString2 = "5";

console.log(NumString1 + parseInt(NumString2));
