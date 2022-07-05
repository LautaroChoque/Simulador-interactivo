

//palabras
let palabraA = "avellaneda"
let palabraB = "boca"
let palabraC = "carlos"
let palabraD = "diego"
let palabraE = "enzo"
let palabraF = "figo"
let palabraG = "gallardo"


//definciones
let definicionA = "Ciudad de donde son Independiente y Racing"
let definicionB = "Club donde juega Dario Benedetto"
let definicionC = "Nombre de Tevez"
let definicionD = "Primer nombre de Maradona"
let definicionE = "Nombre de Franchescoli"
let definicionF = "Jugador balon de oro en el año 2000"
let definicionG = "Tecnico de River Plate"





// vidas
let vidas = 5

// HACER PALABRA DIFERENTE A RESPUESTA
let respuesta = "x"
let palabra = "y"

//Función para pedir respuestas, repetir pregunta y restar vidas si se contesta mal
function pedirPalabra(definicion, palabra){
    while ((vidas >= 1) && (respuesta != palabra)){
        respuesta = prompt(`${definicion}`).toLowerCase()
        if(respuesta != palabra){
            vidas = vidas - 1
            if (vidas >= 1){
            alert (` Fallaste! Te quedan ${vidas} vidas`)
            } else{
                alert ("Te quedaste sin vidas !!")
            }
        }
    }
    
}


pedirPalabra (definicionA, palabraA)
pedirPalabra (definicionB, palabraB)
pedirPalabra (definicionC, palabraC)
pedirPalabra (definicionD, palabraD)
pedirPalabra (definicionE, palabraE)
pedirPalabra (definicionF, palabraF)
pedirPalabra (definicionG, palabraG)




if (vidas >= 1){
    alert ("¡Felicitaciones! ganaste")
}