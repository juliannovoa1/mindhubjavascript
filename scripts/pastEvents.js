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



const pastEvents = fechaFiltrada(data.events)

let cardsString = ''
for (let event of pastEvents){
    cardsString += `<div id="${event._id}" class="col-2 p-2">
    <div class="card">
    <img src="${event.image}" class="card-img-top" alt="cine" height="250">
    <div class="card-body text-center">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <p class="card-text d-inline "><small class="text-muted">Price ${event.price}</small></p>
      <a href="/details.html?id=${event._id}" ><small class="text-muted">ver más</small></a>
    </div></div></div>`
}


const cards = document.getElementById('cards')
cards.innerHTML = cardsString 

//------------------------------------------------------
let categorias = [];

let categoria = document.getElementById("categorias")
data.events.forEach(evento => {
  if (!categorias.includes(evento.category)) {
    categorias.push(evento.category)
    categoria.innerHTML += `<div id="content-cat" class="form-check form-check-inline py-4">
        <div class="checkbox">
          <input type="checkbox" name="category" id="${evento.category}" value="${evento.category}">
          <span>${evento.category}</span>
        </div>
     </div>`
  }
});
