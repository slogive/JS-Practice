const objUSUARIOS = {
    [`id_${Math.round(Math.random() * 100 + 5)}`]: "Valor Aleatorio",
};

const USUARIOS = ["Cesar", "Miguel", "Saray", "Yamit"];

USUARIOS.forEach((usuario, index) => (objUSUARIOS[`id_${index}`] = usuario));

console.log(objUSUARIOS);
