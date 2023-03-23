let parametro = new URLSearchParams(location.search);
let container = document.querySelector(".contenedorDetails")

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json())
    .then(data => {
      let evento = data.events.find(evento => evento._id == parametro.get("id"));
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

    })
