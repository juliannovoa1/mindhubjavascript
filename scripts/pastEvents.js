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

for (let pastEvent of pastEvents){
    cards.innerHTML += `<div id="${pastEvents._id}" class="col border">
    <img src="${pastEvent.image}" class="card-img-top" alt="cine" height="250" width="50">
    <div class="card-body text-center">
      <h5 class="card-title">${pastEvent.name}</h5>
      <p class="card-text">${pastEvent.description}</p>
      <p class="card-text d-inline "><small class="text-muted">Price ${pastEvent.price}</small></p>
      <a  href ="ver más" class="card-text d-inline "><small class="text-muted">ver más</small></a>
    </div>`
}

