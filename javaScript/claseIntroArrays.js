/*
//Como crear un array

//1. New Array() o Array()
const frutas = Array('Naranja','Manzana','Banana')
console.log(frutas)

//Los arreglos no aplcan para un solo número
const unNumero = Array(12)
console.log(unNumero)

//Si aplican para varios números
const numeros = Array(1,2,3,4,5)
console.log(numeros)

//2. Sintaxis literal de un arreglo
const otroNumero = [4]
console.log(otroNumero)

//Arreglo vacio
const arregloVacio = []
console.log(arregloVacio)

const deportes = ['Futbol', 'Tenis','Rugby']
console.log(deportes)

//Arreglos mixtos
const ingredientesRecipiente = [
    'Harina',
    true,
    2,
    {
        ingrediente: 'Leche', cantidad: '1 taza'
    },
    false
]
console.log(ingredientesRecipiente)

//Acceder a los elementos del arreglo
const primeraFruta = frutas[0]
console.log(primeraFruta)

//Identificar tamaño del arreglo
const cantidadFrutas = frutas.length
console.log(cantidadFrutas)

//Mutablidad
frutas.push('Mango')
console.log(frutas)

//Ejercicio Práctico.  Suma de todos los elementos de un arreglo
const numerosArreglo = [1,2,3,4,5]
let suma = 0

for(let i=0; i<numerosArreglo.length; i++) {
    suma += numerosArreglo[i]
}

console.log(suma)

*/

/*
//Mutabilidad de los arrays

//Push

const paises = ['Colombia', 'Perú', 'Venezuela','Argentina']

const nuevosPaises = paises.push('USA','Panamá')

console.log(paises)
console.log(nuevosPaises)

//Pop
const removerPais = paises.pop()
console.log(paises)
console.log(removerPais)

*/

/*
//Inmutabilidad

// Map()
const numeros = [1,2,3,4,5]
const sqrtnumeros = numeros.map(num => num * num)

console.log(numeros)
console.log(sqrtnumeros)

// forEach()
const colores = ['Amarillo','Azul','Rojo']
const iterarColores = colores.forEach(color => color)

console.log(colores)
console.log(iterarColores)
*/

//Ejercicio conversión Faren a Celcios

const tempEnFaren = [32,44,18]

const tempEnCelcios = tempEnFaren.map(faren => (5/9) * (faren - 32))

console.log(tempEnFaren)
console.log(tempEnCelcios)