// Exercise #1
const ParImpar = (numero = undefined) => {
    if (numero === undefined) return console.error("No ingresaste un numero");

    if (typeof numero != "number")
        return console.error(`El valor "${numero}" no corresponde a un numero`);

    return (numero % 2) === 0
        ? console.info(`El numero "${numero}" es par.`)
        : console.info(`El numero "${numero}" no es par.`);
};

    ParImpar(1);

// Exercise #2
const CtoF = (temp = undefined) => {
    if (temp === undefined)
        return console.error("No ingresaste el valor a convertir");

    if (typeof temp != "number")
        return console.error("No ingresaste un valor valido");

    temp = temp * 9 / 5 + 32;

    console.log(temp);
};

    CtoF(1);