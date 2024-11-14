//Metodos que iteran sobre un arreglo

//Metodos que no modifican un arreglo (Inmutabulidad)

//Filter()
const numeros = [1,2,3,4,5,6,7,8,9,10]
const numeroPar = numeros.filter(num => num % 2 === 0)

console.log(numeros)
console.log(numeroPar)

//Reduce() - Caso 1

const reduceNumeros = [1,2,3,4,5]
const suma = reduceNumeros.reduce((acum, valor) => acum + valor, 0)

console.log(reduceNumeros)
console.log(suma)

//Reduce() - Caso 2

