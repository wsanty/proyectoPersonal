/* Es una estructura de datos que ayuda a guardar valores de una forma particular 
a estos datos se les llama key/value

objeto {
    propiedad: valor de la propiedad,
    propiedad2: valor2

    Metodos
    }
*/

const persona = {
    nombre: "Wilson",
    edad: 30,
    direccion: {
        numero: "Calle 20a 46a 26 Apto 203",
        ciudad: "Marinilla"
    },

    saludo () {
        console.log(`Hola, mi nombre es: ${persona.nombre}`)
    }
};
console.log(persona);
persona.saludo();

//Agregar nuevas propiedades
persona.telefono = "3147907008";

console.log(persona.telefono);


//Agrega nuevo método
persona.despedir = () => {
    console.log("Adios")
};

persona.despedir();

//Eliminar una propiedad
delete persona.telefono;

//Eliminar un métido
delete persona.despedir;