let Mapa = new Map();
Mapa.set("Nombre", "Cesar");
Mapa.set("Apellido", "Fonseca");
Mapa.set("Edad", 19);

console.log(Mapa);
console.log(Mapa.size);
console.log(Mapa.has("Correo"));
console.log(Mapa.get("Nombre") + " " + Mapa.get("Apellido"));

Mapa.delete("Apellido");
console.log(Mapa.get("Nombre") + " " + Mapa.get("Apellido"));

for (let [key, value] of Mapa) {
    console.log(`Key: "${key}", Valor: "${value}"`);
}

console.group("Agregados tipos de keys diferentes");

Mapa.set(1, "Uno");
Mapa.set(false, "Falso");
Mapa.set({}, "Obj");

console.log(Mapa);

for (let [key, value] of Mapa) {
    console.log(`Key: "${key}", Valor: "${value}"`);
}
console.groupEnd("Agregados tipos de keys diferentes");

console.group("Toma de valores");
    console.group("Keys");
    const MapaKeys = [...Mapa.keys()]
    console.log(MapaKeys)
    console.groupEnd("Keys");
    
    console.group("Values");
    const MapaValues = [...Mapa.values()]
    console.log(MapaValues)
    console.groupEnd("Values");
console.groupEnd("Toma de valores");
