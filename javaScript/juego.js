const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt(
prompt ("Adivina un numero secreto entre 1 y 10")
)

console.log("El número con el que juegas es :" + numeroJugador)

if (numeroJugador === numeroSecreto){
    console.log('¡Felicidades! Has adivinado el número')
} else if (numeroJugador < numeroSecreto) {
    console.log('Tu numero es menor al número secreto. Intenta de nuevo')
} else {
    console.log('Tu número es mayor al número secreto.  Intenta de nuevo')
}
