let events = [];
//variables para guardar cada cosa
let porcentajes = [];
let mayor = 0;
let menor = Infinity;
let capacity = [];
let largerCapacity;
let categories = [];

//funcion asincronica
const traerData = async () => {
    await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(json => {
            //llamada de la funciones para las infos de los evntos
            tablaUno(json.events);
            tablaDos(json.events);
            tablaTres(json.events)
            //funcion para mostrar los resultados
            crearTabla();
        });
};
//llamada de la funcion donde obtengo los datos
traerData();

const tablaUno = (events) => {
    for (let i = 0; i < events.length; i++) {
        const evento = events[i];
        if (evento.assistance && evento.capacity) {
            const porcentaje = evento.assistance * 100 / evento.capacity;
            porcentajes.push(porcentaje);
            if (porcentaje > mayor) {
                mayor = porcentaje;
            }
            if (porcentaje < menor) {
                menor = porcentaje;
            }
            capacity.push(evento.capacity);

            if (evento.capacity == Math.max(...capacity)) {
                largerCapacity = `${evento.name}: ${evento.capacity}`;
            }
            if (!categories.includes(evento.category)) {
                categories.push(evento.category);
            }
        }
    }
};
//funcion para crear la tabla
const crearTabla = () => {
    //toma el html y muestra el mayor y menor
    const tablaUno = document.getElementById("categoria-tabla");
    //filas
    const rows = [
        createRow(`Mayor porcentaje: ${mayor.toFixed(2)} %`),
        createRow(`Menor porcentaje: ${menor.toFixed(2)} %)`),
        createRow(`Mayor capacidad: ${largerCapacity}`),
    ];
    rows.forEach((row) => {
        tablaUno.appendChild(row);
    });
};

//funcion que toma la fila en la tabla
const createRow = (text) => {
    const row = document.createElement("td");
    const cell = document.createElement("td");
    cell.textContent = text;
    row.appendChild(cell);
    return row;
};



/*Tabla 2 (Past Events)*/

const tablaDos = (events) => {
    const categories = {};
    const currentDate = new Date(); //Fecha actual

    events.forEach((evento) => {
        const eventDate = new Date(evento.date); //Fecha evento
        if (eventDate < currentDate) { //comparacion entre fecha evento y actual
            if (evento.category in categories) {
                //propiedades del evento category
                categories[evento.category].revenue += evento.price * evento.assistance;
                categories[evento.category].attendance += evento.assistance;
                categories[evento.category].capacity += evento.capacity;
                categories[evento.category].totalRevenue += evento.price * evento.assistance;
            } else {
                categories[evento.category] = {
                    revenue: evento.price * evento.assistance,
                    attendance: evento.assistance,
                    capacity: evento.capacity,
                    totalRevenue: evento.price * evento.assistance,
                };
            }
        }
    });

    const tablaStats2 = document.getElementById("categoria-tabla2");
    let rows = ['<th class="col-4 text-center">Categories</th><th class="col-4 text-center">Revenues</th><th class="col-4 text-center">Percentage of attendance</th>'];
    let totalRevenue = 0;
    for (const category in categories) {
        const revenue = categories[category].revenue;
        totalRevenue += revenue;
        const attendancePercentage = (categories[category].attendance / categories[category].capacity) * 100;
        const row = `<tr><td>${category}</td><td>$${revenue.toFixed(2)}</td><td>${attendancePercentage.toFixed(2)}%</td></tr>`;
        rows.push(row);
    }
    
    tablaStats2.innerHTML = rows.join("");
}

/* Tabla 3(Upcoming events)*/

const tablaTres = (events) => {
    const categories = {};
    const currentDate = new Date(); 
   
    events.forEach((evento) => {
        const eventDate = new Date(evento.date); 
        if (eventDate > currentDate) { 
            if (evento.category in categories) {
                
                categories[evento.category].revenue += evento.price * evento.estimate;
                categories[evento.category].estimate += evento.estimate;
                categories[evento.category].capacity += evento.capacity;
                categories[evento.category].totalRevenue += evento.price * evento.estimate;
            } else {
                categories[evento.category] = {
                    revenue: evento.price * evento.estimate,
                    estimate: evento.estimate,
                    capacity: evento.capacity,
                    totalRevenue: evento.price * evento.estimate,
                };
            }
        }
    });

    const tablaStats3 = document.getElementById("categoria-tabla3");
    let rows = ['<th class="col-4 text-center">Categories</th><th class="col-4 text-center">Revenues</th><th class="col-4 text-center">Percentage of attendance</th>'];
    let totalRevenue = 0;
    for (const category in categories) {
        const revenue = categories[category].revenue;
        totalRevenue += revenue;
        const estimatePercentage = (categories[category].estimate / categories[category].capacity) * 100;
        const row = `
        <tr><td>${category}</td>
        <td>$${revenue.toFixed(2)}</td>
        <td>${estimatePercentage.toFixed(2)}%</td>
        </tr>`;
        rows.push(row);
    }
    
    tablaStats3.innerHTML = rows.join("");
}