import data from "../data/data.js";


const currentDate = data.currentDate

function fechaFiltrada(eventos){
    let pastEvents = []
    for(let evento of eventos){
        if (currentDate > evento.date){
            pastEvents.push(evento)
        }
    }
    return pastEvents
}


console.log(fechaFiltrada(data.events))


const pastEvents = fechaFiltrada(data.events)

