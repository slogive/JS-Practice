// Async - Wait

function cuadradoPromise(value, callback) {
    if (typeof value !== "number")
        return Promise.reject(
            `El valor ingresado "${value}" no corresponde a un numero`
        );
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value,
            });
        }, 0 | (Math.random() * 1000));
    });
}

async function funcionAsync() {
    try {
        console.group("Inicio Async Declarada")
        console.log("Inicio Async Declarada");

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        console.log("Final Async Declarada");
        console.groupEnd("Inicio Async Declarada")
    } catch (err) {
        console.error(err);
    }
}

funcionAsync();

const funcionAsyncExp = async () => {
    try {
        console.group("Inicio Async Exp")
        console.log("Inicio Async Exp");

        let obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(9);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        console.log("Final Async Exp");
        console.groupEnd("Inicio Async Exp")
    } catch (err) {
        console.error(err);
    }
};

funcionAsyncExp();
