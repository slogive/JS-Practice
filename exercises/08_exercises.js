// Exercise #1

    const Cuadrado = (conjunto = undefined) => {
        
        conjunto = [8, 16, 32, 64];

        if (conjunto === undefined) return console.error('Ingresa una arreglo numerico.')

        if (!(conjunto instanceof Array)) return console.error('No ingresaste una arreglo numerico.')

        if (conjunto.lenght === 0) return console.error('El arreglo numerico esta vacio.')

        for (let num of conjunto) {
            if (typeof num !== 'number') return console.error(`El valor ${num} no es valido.`);
        }

        const newconjunto = conjunto.map(el => el * el);

        return console.log(`Arreglo original: "${conjunto}" \n Arreglo elevado al cuadrado: "${newconjunto}`);
    }

    // Cuadrado([8, 16, 32, 64]);
    Cuadrado();

// Exercise #2

    const MinMax = (MMArr = undefined) => {

        MMArr = [0, 1, 2, 3, 4, 5]
        
        if (MMArr === undefined) return console.error('Ingresa un arreglo de numeros.')

        if (!(MMArr instanceof Array)) return console.error('Ingresa un arreglo de numeros.')

        if (MMArr.length === 0) return console.error('El arreglo numerico esta vacio.')

        for (let MMnum of MMArr) {
            if (typeof MMnum !== 'number') return console.error(`El valor "${MMnum}", no es un numero.`)
        }

        return console.log(`Arreglo original: "${MMArr}" \n Valor Mayor: "${Math.max(...MMArr)}" \n Valor menor: "${Math.min(...MMArr)}`);
    }

    MinMax();

// Exercise #3

    const ParesImpares = (PIArr = undefined) => {

        PIArr = [0, 1, 2, 3, 4, 5]
            
        if (PIArr === undefined) return console.error('Ingresa un arreglo de numeros.')

        if (!(PIArr instanceof Array)) return console.error('Ingresa un arreglo de numeros.')

        if (PIArr.length === 0) return console.error('El arreglo numerico esta vacio.')

        for (let PInum of PIArr) {
            if (typeof PInum !== 'number') return console.error(`El valor "${PInum}", no es un numero.`)
        }

        return console.log({
            pares: PIArr.filter(PInum => PInum % 2 === 0),
            impares: PIArr.filter(PInum => PInum % 2 === 1)
        })

    }

    ParesImpares();