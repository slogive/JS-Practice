const json = {
    cadena: "Cadena",
    numero: 0,
    boolean: true,
    arreglo: ["correr", "saltar", "programar"],
    objeto: {
        nombre: "Cesar",
        apellido: "Fonseca"
    },
    null: null
}

console.log(JSON)
console.group("Parse")
console.log(JSON.parse("{}"))
console.log(JSON.parse("[]"))
console.log(JSON.parse("[1, 2, 3]"))
console.log(JSON.parse('{"cadena":"Cadena","numero":0,"boolean":true,"arreglo":["correr","saltar","programar"],"objeto":{"nombre":"Cesar","apellido":"Fonseca"},"null":null}'))
console.groupEnd("Parse")

console.group("Stringify")
console.log(JSON.stringify("{}"))
console.log(JSON.stringify("[]"))
console.log(JSON.stringify("[1, 2, 3]"))
console.log(JSON.stringify({x: 1, y: 2}))
console.log(JSON.stringify(json))
console.groupEnd("Stringify")