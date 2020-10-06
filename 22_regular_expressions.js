// Expresiones regulares

let ExpRegText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let ExpReg0 = RegExp("lorem","ig"), ExpReg1 = /lorem/ig, ExpReg2 = /lorem{1,3}/ig, ExpReg3 = /lorem{3}/ig, ExpReg4 = /lorem{3,}/ig;

console.group("Expresiones Regulares");
console.log(ExpReg0.test(ExpRegText));
console.log(ExpReg0.exec(ExpRegText));

console.log(ExpReg1.test(ExpRegText));
console.log(ExpReg1.exec(ExpRegText));

console.log(ExpReg2.test(ExpRegText)+" / Rango de repeticiones entre x & y");
console.log(ExpReg3.test(ExpRegText)+" / Rango de repeticiones base definido ");
console.log(ExpReg4.test(ExpRegText)+" / Rango de repeticiones base definido con infinidad");
console.groupEnd("Expresiones Regulares");

// Funciones Anonimas Auto-ejecutables - Immediate Invoke Function Expression - IIFE
(function () {
    console.log("My first IIFE")
})();

// IIFE with variables
(function (d, w, c) {
    console.log("My second IIFE")
    console.log(d, w, c)
})(document, window, console);

// Kind of IIFE

// Classic
(function () {
    console.group("Kinds of IIFE")
    console.log("Soy una IIFE Clasica");
})();

// Version Crockford
((function () {
    console.log("Soy una IIFE Crockford");
})());

// Version Unaria
+function () {
    console.log("Soy una IIFE Unaria");
}();

// Version Facebook
!function () {
    console.log("Soy una IIFE Facebook");
    console.groupEnd("Kinds of IIFE");
}();