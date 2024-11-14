const saludo =  function (nombre) {
    return `Hi, $[nombre]`
}

//Arrow Funtion - Retorno explicito
const nuevoSaludo = (nombre) => {
    return `Hi, $[nombre]`
}

//Arrow Funtion - Retorno implicito
const nuevoSaludoImplicito = nombre => `Hi, ${nombre}`
const nuevoSaludoImplicitoConParametros = (nombre, apellido) => `Hi, Yo soy ${nombre} ${apellido} `

//Enlace léxico
const caracterFuncional = {
    nombre: 'Tio Ben',
    mensajeConFuncionTradicional: function (mensaje){
        console.log(`${this.nombre} dice: ${mensaje}`)
    },
    mensajeConFuncionArrow: (mensaje) => {
        console.log(`${this.nombre} dice: ${mensaje}`)
    }
}

caracterFuncional.mensajeConFuncionTradicional("Un gran poder conlleva una gran responsabilidad")
caracterFuncional.mensajeConFuncionArrow("Cuidado con el Dr Octupus")


