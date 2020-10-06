//Rest | Sirve para añadir valores de forma dinamica
console.log("%cRest", "color: yellow;");

function restsuma(restA, restB, ...restC) {
    let restresultado = restA + restB;

    restC.forEach(function (n) {
        restresultado += n;
    });

    return restresultado;
}

console.log(restsuma(1, 2, 5, 8));
