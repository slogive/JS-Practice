const persona = {
    nombre: "",
    apellido: "",
    edad: 0,
};

const manejador = {
    set(obj, prop, valor) {
        obj[prop] = valor;
    },
};

const Cesar = new Proxy(persona, manejador);

Cesar.nombre = "Cesar";
Cesar.apellido = "Fonseca";
Cesar.edad = 19;

console.log(Cesar);

// White list

const perfil = {
    nombre: "",
    apellido: "",
    edad: 0,
};

const handler = {
    set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1)
            return console.error(
                `La propiedad "${prop}" no exite en el objeto "perfil"`
            );
        obj[prop] = valor;
    },
};

const Personal = new Proxy(perfil, handler);

Personal.nombre = "Cesar"
Personal.apellido = "Fonseca"
Personal.edad = 19
Personal.facebook = "@reaperskle"


console.log(Personal);