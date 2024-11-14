function calcularPrecioDescuento(precio, porcentajeDescuento){
    const descuento = (precio * porcentajeDescuento) / 100
    const precioConDescuento = precio - descuento
    return precioConDescuento
}

const precioOriginal = 100
const porcentajeDescuento = 20
const precioFinal = calcularPrecioDescuento(precioOriginal, porcentajeDescuento)

console.log("Precio original: $" + precioOriginal)
console.log("Valor descuento: " + porcentajeDescuento + "%")
console.log("El precio final es: $" + precioFinal)