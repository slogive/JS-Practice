import DefaultSaludar, {EjecutarSaludo, DBUser, DBPassword} from "./consts.js";
// Import con Alias con uso de la palabra reservada "as" 
// import {Math as Matematicas} from "./maths.js";
import {Math as Matematicas} from "./maths.js";
import {Act1Ej1, Act1Ej2, Act1Ej3, Act1Ej4, Act2Ej1, Act2Ej2, Act2Ej3} from "../exercises/exercises.js";

console.log(`Estas iniciando sesion con el usuario: %c${DBUser}, la contraseña utilizada es: %c${DBPassword}.`,"color: red; background-color: white;")

console.log(EjecutarSaludo,"color: red; background-color: white;");

console.log("Modulos cargados");

console.log(Matematicas.Sumar(5, 5));
console.log(Matematicas.Restar(5, 5));
console.log(Matematicas.Dividir(5, 5));

// import default - Puedes solamente hacer import default una sola vez al trabajar con archivos JS
DefaultSaludar();

console.group("Exercises");
    console.group("Class Exercises #1");
        Act1Ej1(console.log("%cExercise 1","color: red; font-size: 1.25em"));
        Act1Ej2(console.log("%cExercise 2","color: red; font-size: 1.25em"));
        Act1Ej3(console.log("%cExercise 3","color: red; font-size: 1.25em"));
        Act1Ej4(console.log("%cExercise 4","color: red; font-size: 1.25em"));
    console.groupEnd("Class Exercises #1");

    console.group("Class Exercises #2");
        Act2Ej1(console.log("%cExercise 1","color: red; font-size: 1.25em"));
        Act2Ej2(console.log("%cExercise 2","color: red; font-size: 1.25em"));
        Act2Ej3(console.log("%cExercise 3","color: red; font-size: 1.25em"));
    console.groupEnd("Class Exercises #2");
console.groupEnd("Exercises");

//

function ContarTexto (TextoPContar = prompt("Por favor ingresa tu cadena de texto.","")) {
    if (!TextoPContar) {
        console.log("%cNo ingresaste ningun valor","background-color: yellow; color: red;");
        ContarTexto();  
    } else {
        console.log(`"${TextoPContar}" cuenta con "${TextoPContar.length}" carateres.`);
    }
}

// const ContarTexto = (TextoPContar = prompt("")) => (!TextoPContar) ? console.log("%cNo ingresaste ningun valor","background-color: yellow; color: red;") : console.log(`"${TextoPContar}" cuenta con "${TextoPContar.length}" carateres.`);

// ContarTexto();

// const MapTest = [1, 2, 3, 4, 5], MapValue = prompt(""), MapCreated = MapTest.map(x => x * MapValue);

const MapFunction = () => console.log(MapCreated);

// MapFunction();

function UserVerf (username = "") {
    username = prompt("");
    if (username != "Sara") {
        console.log(`El usuario ${username} no fue encontrado`);
    } else {
        console.log(`%cBienvenido ${username}, ahora puedes navegar por el menu de administracion del sitio.`,"color: red;");
    }
};

// UserVerf(); 

function UserInputText() {
    let UserInput = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
    
    let UserInputTr0 = UserInput.split(" ");

    console.log(UserInput.split(" ").join(""));
    document.getElementById("test").innerHTML = UserInputTr0.join("<br>");
    // UserInputTr0.forEach(Element => console.log(Element));
};

UserInputText();

