import data from "../data/data.js";


const currentDate = data.currentDate

function fechaFiltrada(eventos){
    let upcomingEvents = []
    for(let evento of eventos){
        if (currentDate < evento.date){
            upcomingEvents.push(evento)
        }
    }
    return upcomingEvents
}


console.log(fechaFiltrada(data.events))


const upcomingEvents = fechaFiltrada(data.events)

for (let upcomingEvent of upcomingEvents){
    cards.innerHTML += `<div id="${upcomingEvents._id}" class="col border">
    <img src="${upcomingEvent.image}" class="card-img-top" alt="cine" height="250" width="50">
    <div class="card-body text-center">
      <h5 class="card-title">${upcomingEvent.name}</h5>
      <p class="card-text">${upcomingEvent.description}</p>
      <p class="card-text d-inline "><small class="text-muted">Price ${upcomingEvent.price}</small></p>
      <a  href ="ver más" class="card-text d-inline "><small class="text-muted">ver más</small></a>
    </div>`
}

