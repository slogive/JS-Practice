// Exercise #1
    nombre = "Cesar Fonseca";

    const ValidarNombre = (nombre = "") => {
        if (nombre == undefined) console.error('No ingresaste un nombre');
        
        if (typeof nombre != 'string') console.error(`El valor "${nombre}", no es un nombre valido.`);
        
        const ExpReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);
        
        return (ExpReg)
        ? console.log(`"${nombre}", es un nombre valido.`)
        : console.log(`"${nombre}", no es un nombre valido.`)
    }

    ValidarNombre("Cesar");