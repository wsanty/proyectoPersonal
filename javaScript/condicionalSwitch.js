let expresion = "Bananos"

switch(expresion){
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo")
        break;
    case "Manzanas":
        console.log("Las Manzanas cuestan $43 el kilo")
        break;
    case "Plátanos":
        console.log("Los plátanos cuestan a $10 el kilo")
        break;
    case "Mangos":
    case "Papayas":
        console.log("Los Mangos y las Papayas cuestas $15 el kilo")
        break;
    default:
        console.log(`Lo sentimos, no contamos con existencia de ${expresion}`)
}

console.log("¿Te puedo ayudar con algo más?")