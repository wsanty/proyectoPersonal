// Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//Notación cientifica
const cientifico = 5e3

//Infinitos y NaN
const infinito = Infinity
const noEsNumero = NaN

//Operaciones aritméticas

// Grupo 1:  Sumas, resta, multiplicación y división
const suma = 3 + 4
const resta = 4 - 3
const multiplicacion = 4 * 3
const division = 12 / 3

// Grupo 2: Módulo y exponeciación
const modulo = 15 % 8
const potencia = 2**3

//Precisión (Javascrip no es preciso)
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(2))
console.log(resultado.toFixed(2) == 0.30) //true
console.log(resultado.toFixed(2) === 0.30) //false

//Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

