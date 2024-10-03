document.addEventListener("DOMContentLoaded", () => {
fetch("personajes.json")
.then(response => response.json())
.then(data => {
    cargarPersonajes(data.dc, '.dc-container');
    cargarPersonajes(data.marvel, '.marvel-container');
})
.catch(error => console.error('Error al cargar los personajes:', error));

function cargarPersonajes(personajes, containerSelector) {
const container = document.querySelector(containerSelector);
personajes.forEach(personaje => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
        <img src="${personaje.imagen}" alt="${personaje.nombre}" width="100">
        <h3>${personaje.nombre}</h3>
        <p>Año de aparición: ${personaje.anio_aparicion}</p>
    `;

    tarjeta.addEventListener("click", () => mostrarDetalle(personaje));
    container.appendChild(tarjeta);
});
}

function mostrarDetalle(personaje) {
document.getElementById("modal-nombre").innerText = personaje.nombre;
document.getElementById("modal-nombre-real").innerText = personaje.nombre_real;
document.getElementById("modal-biografia").innerText = personaje.biografia;
document.getElementById("modal-resistencia").innerText = personaje.resistencia;
document.getElementById("modal-fuerza").innerText = personaje.fuerza;

const modal = document.getElementById("modal");
modal.style.display = "block";

const closeModal = document.querySelector(".close");
closeModal.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
}

document.getElementById("iniciar-batalla").addEventListener("click", () => {
document.getElementById("batalla-info").innerText = "¡La batalla ha comenzado!";
});
