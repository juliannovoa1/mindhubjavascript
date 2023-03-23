let events = [];
let porcentajes = [];
let mayor = 0;
let menor = Infinity;
let capacity = [];
let largerCapacity;
let categories = [];

const traerData = async () => {
    await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(json => {
            tablaUno(json.events);
            crearTabla();
        });
};
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

const crearTabla = () => {
    const tablaUno = document.getElementById("categoria-tabla");
    const rows = [
        createRow(`Mayor porcentaje: ${mayor.toFixed(2)} %`),
        createRow(`Menor porcentaje: ${menor.toFixed(2)} %)`),
        createRow(`Mayor capacidad: ${largerCapacity}`),
    ];
    rows.forEach((row) => {
        tablaUno.appendChild(row);
    });
};

const createRow = (text) => {
    const row = document.createElement("td");
    const cell = document.createElement("td");
    cell.textContent = text;
    row.appendChild(cell);
    return row;
};




