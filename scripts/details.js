
let query = location.search;
let parametros = new URLSearchParams(query);
let id = parametros.get("id") 
let evento = data.events.find(evento => evento._id == id);


let container = document.querySelector(".contenedorDetails")
container.innerHTML = `<div class="card">
<img src="${evento.image}" class="card-img-top" alt="cine" height="250">
<div class="card-body text-center">
  <h5 class="card-title">${evento.name}</h5>
  <p class="card-text">${evento.description}</p>
  <p class="card-text d-inline "><small class="text-muted">Price ${evento.price}</small></p>
  
</div></div>`   