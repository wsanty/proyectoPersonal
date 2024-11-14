const listaDeCompras = {
    manzanas: 5,
    peras: 3,
    naranjas: 6,
    uvas: 1
}

for (frutas in listaDeCompras){
    console.log(frutas)
}

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`)
}

// Validación de la lista no iterable
for (fruta of listaDeCompras){
    console.log(fruta)
}