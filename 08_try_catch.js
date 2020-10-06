// Try Catch Finally | Busqueda de errores en JavaScript

try {
    console.log("En el try se agrega el codigo a evaluar");
} catch {
    console.log("Catch captura cualquier error surgido o lanzado en el try");
} finally {
    console.log("Finally se ejecutara siempre al final de un bloque try-catch");
}

// Try Catch Finally | Ejemplo

try {
    console.log("En el try se agrega el codigo a evaluar");

    noExiste;
} catch (error) {
    console.log("Catch captura cualquier error surgido o lanzado en el try");

    console.log(error);
} finally {
    console.log("Finally se ejecutara siempre al final de un bloque try-catch");
}

// Try Catch Finally | Ejemplo con mensaje personalizado de error

try {
    let TCFError = "Y";

    if (isNaN(TCFError)) {
        throw new Error("El caracter introducido no es un numero.");
    }

    console.log(TCFError * TCFError);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}
