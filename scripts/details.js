urlApi = "https://mindhub-xj03.onrender.com/api/amazing"

async function getData() {
  try {
      let response = await fetch(urlApi)

      let datos = await response.json()

      tarjetaDetails(datos.events)
  }
  catch {
      console.log()
  }
}

getData()


let query = location.search;
let parametros = new URLSearchParams(query);
let id = parametros.get("id") 
let evento = data.events.find(evento => evento._id == id);


let container = document.querySelector(".contenedorDetails")
container.innerHTML = `<div class="detail-card d-flex flex-column flex-lg-row justify-content-center align-items-center 
 border border-dark border-1">
<img src="${evento.image}" alt="${evento.name}" class="card-img" height="800">
<div class="card-body text-center">
  <h5 class="card-title"><b>Name: </b>${evento.name}</h5>
  <p class="card-text"><b>Description: </b>${evento.description}</p>
  <p class="card-text"><b>Category: </b>${evento.category}</p>
  <p class="card-text"><b>Place: </b>${evento.place}</p>
  <p class="card-text"><b>Capacity: </b>${evento.capacity}</p>
  <p class="card-text"><b>Assistance: </b>${evento.assistance}</p>
  <p class="card-text d-inline"><small class="text-muted"><b>Price: </b>${evento.price}</small></p>
  <div><a href="./index.html" class="text-decoration-none fs-5"><b>Go Home</b></a>
</div></div></div>` 


