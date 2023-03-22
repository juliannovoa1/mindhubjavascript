let events = [];

/*funcion asincrona*/
const traerData = async () => {
    await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(json => {
            /*llamar a la funcion tabla uno para la info de eventos*/
            tablaUno(json.events);
            /*funcion para mostrar los resultados de la tabla*/
            crearTabla();
        });
};
/*llamo a la funcion donde obtengo datos*/
traerData();
/*guardo las variables para guardar cada cosa*/
let porcentajes = [];
let mayor = 0;
let menor = Infinity;

/*procesas los eventos para recorrer los porcentajes de asistencia*/
const tablaUno = (events) => {
    /*recorre eventos en un for*/
    for (let i = 0; i < events.length; i++) {
        const evento = events[i];
    /*busca datos de asistencia y capacidad de los eventos*/
        if (evento.assistance && evento.capacity) {
            /*calcula porcentaje de asistencia y pushea el porcentaje*/
            const porcentaje = evento.assistance * 100 / evento.capacity;
            porcentajes.push(porcentaje);
            /*muestra el mayor y menor % */
            if (porcentaje > mayor) {
                mayor = porcentaje;
            }
            if (porcentaje < menor) {
                menor = porcentaje;
            }
        }
    }
};

/*funcion para crear la table y mostrar datos en ella*/
const crearTabla = () => {
    /*toma en el html y muestra el mayor y menor*/
    const tablaUnoo = document.getElementById('categoria-tabla');
    /*crea filas*/
    const rows = [
        createRow(`Mayor porcentaje: ${mayor.toFixed(2)} %`),
        createRow(`Menor porcentaje: ${menor.toFixed(2)} %`),
        createRow('aca va la cat mayor capacidad')
    ];
    /*agrega las filas a la tabla*/
    rows.forEach(row => {
        tablaUnoo.appendChild(row);
    });
};
/*funcion que toma la fila en la tabla*/
const createRow = (text) => {
    const row = document.createElement('td');
    const cell = document.createElement('td');
    cell.textContent = text;
    row.appendChild(cell);
    return row;
};

/*tomar el currentDate para poder filtrar las categorias pasadas*/

/*for each de eventos para pushear la capacidad del evento y 
despues un filter de evento para obtener la mayor capacidad. {evento.name}:{evento.capacity}

evento.filter*/