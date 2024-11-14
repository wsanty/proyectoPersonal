//Funciones Puras

// Efectos secundarios

//1. Modidicar variables globales
//2. Modificar parámetros
//3. Solicitudes HTTP
//4. Imprimir mensajes en pantalla o consola
//5. Manipulación del DOM
//6. Obtener la hora actual

//Pura
function suma (a, b) {
    return a + b
}

//Impura, porque esta generando mensaje en pantalla
function suma (a, b) {
    console.log("A: ", a)
    return a + b
}

//Impura, por modificación en variables
let total = 0

function sumaConEfectoSecundario (a) {
    total += a
    return total
}


//Pura
function cuadrado (x) {
    return x * x
}

