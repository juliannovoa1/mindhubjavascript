const cards = document.getElementById('cards');

let eventsFilter = [];
let events = []

function showCards(eventArray) {
  let cardsString = '';
  for (let event of eventArray) {
    cardsString += `<div id="${event._id}" class="col-2 p-2">
    <div class="card">
    <img src="${event.image}" class="card-img-top" alt="cine" height = "150">
    <div class="card-body text-center">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <p class="card-text d-inline "><small class="text-muted">Price ${event.price}</small></p>
      <a href="./details.html?id=${event._id}" class="card-text d-inline "><small class="text-muted">ver más</small></a>
    </div></div></div>`
  }
  cards.innerHTML = cardsString;
}
let categorias = []
const traerData = async () => {
  await fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data => {
      events = data.events;
      showCards(events);

      /*Categorias*/
      let categoria = document.getElementById("categorias")
      events.forEach(evento => {
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



    });
}

traerData();


function filtrar(cats){
  eventsFilter = []
  events.forEach(evento => {
    if (cats.includes(evento.category)) {
      eventsFilter.push(evento)
    }
  })
  showCards(eventsFilter)
}

let catCheck = [];
let botonCheck = document.getElementById('categorias');
botonCheck.addEventListener('click', (e) => {
  if (e.target.type === "checkbox" && !catCheck.includes(e.target.value)) {
    catCheck.push(e.target.value)
    filtrar(catCheck)
  } else if (e.target.type === "checkbox" && catCheck.includes(e.target.value)) {
    const indiceCategoria = catCheck.findIndex(category => category === e.target.value);
    catCheck.splice(indiceCategoria, 1);
    filtrar(catCheck)
  }
  console.log(eventsFilter)

})


/*Busqueda*/
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('input');
let busqueda = '';

function filterCards() {
  const cardElements = document.querySelectorAll('.cards');
  let count = 0;
  cardElements.forEach(cards => {
    const title = cards.querySelector('h5').innerText.toLowerCase();
    const description = cards.querySelector('p').innerText.toLowerCase();
    if (title.includes(busqueda) || description.includes(busqueda)) {
      cards.style.display = 'block';
      count++;
    } else {
      cards.style.display = 'none';
    }
  });
  if (count === 0) {
    const results =
      `<div class='contenedor p-5 fs-4'><span>No se encontaron resultados</span></div>`
    cards.innerHTML = results;
  }
}
searchButton.addEventListener('click', (e) => {
  busqueda = searchInput.value.toLowerCase()
  filterCards()
});
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault
    filterCards()
  }
});


