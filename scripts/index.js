
const events = data.events

let cardsString = ''
for (let event of events){
    cardsString += `<div id="${event._id}" class="col-2 p-2">
    <div class="card">
    <img src="${event.image}" class="card-img-top" alt="cine" height = "150">
    <div class="card-body text-center">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <p class="card-text d-inline "><small class="text-muted">Price ${event.price}</small></p>
      <a href="/details.html?id=${event._id}" class="card-text d-inline "><small class="text-muted">ver más</small></a>
    </div></div></div>`
}


const cards = document.getElementById('cards')
cards.innerHTML = cardsString




//------------------------------------------------------


let categorias =  [];

let categoria = document.getElementById("categorias")
data.events.forEach(evento => {
  if(!categorias.includes(evento.category)){
    categorias.push(evento.category)
      categoria.innerHTML += `<div id="content-cat">
        <div class="checkbox">
          <input type="checkbox" name="category" id="${evento.category}" value="${evento.category}">
          <span>${evento.category}</span>
        </div>
     </div>`
  }
  });


/*Filtro categorias*/

let botonCheck = document.querySelectorAll("input[type='checkbox']")
let eventsCheck = []
botonCheck.forEach(boton => boton.addEventListener('change',verificate))
function verificate(){
  eventsCheck = []
  let seleccionar = Array.from(botonCheck).filter(check => check.checked)
  for (const event of data.events){
    seleccionar.forEach(input =>{
      if(event.category == input.value){
        eventsCheck.push(event)
      }
    })
  }
}


