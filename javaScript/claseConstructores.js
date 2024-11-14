// const persona = {
//     nombres: "Wilson de Js",
//     apellidos: "Gallego Serna"
// }

function Persona (nombres, apellidos, edad) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.edad = edad;
}

const persona1 = new Persona("Wilson de Js", "Gallego Serna", 48)
console.log(persona1)

const persona2 = new Persona("Lila María", "Gallego Triana", 10)
console.log(persona2)
