// This
console.log("%cThis", "color: yellow;");

// This - Function

function This() {
    console.log(this);
}

This();

// This - Objeto | Especifo del string

const This0 = {
    Nombre: "Cesar",
    Apellido: "Fonseca",
    This0Func: function () {
        console.log(this);
    },
};

This0.This0Func();

// This - Objeto | Reconoce la herencia

const This1 = {
    Nombre: "Cesar",
    Apellido: "Fonseca",
    This1Func: () => {
        console.log(this);
    },
};

This1.This1Func();

// This - Objeto | Especifico del string - nuevo metodo

// This - Objeto | Especifo del string

const This2 = {
    Nombre: "Cesar",
    Apellido: "Fonseca",
    This2Func() {
        console.log(this);
    },
};

This2.This2Func();
