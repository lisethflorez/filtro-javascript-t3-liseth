document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const dialog = document.getElementById("modal");
    const modalcontent = document.getElementById("modalcontent");


    function mostrar(personaje) {
        personaje.forEach(personajes => {
            const contenedor = document.createElement("div");
            contenedor.classList.add("personajes-contenedor");
            contenedor.innerHTML = `
            <img src="${personajes.imagen}" alt="${personajes.nombre}">
                <h3>${personajes.nombre}</h3>
                `;

            contenedor.addEventListener('click',()=>{
                modalcontent.innerHTML=`
                <h2>${personajes.nombre}</h2>
                <img src="${personajes.imagen}" alt="${personajes.nombre}">
                <p><strong>nombre real:</strong>${personajes.nombre_real}</p>
                <p><strong>biografia:</strong>${personajes.biografia}</p>
                <p><strong>resistencia:</strong>${personajes.resistencia}</p>
                <p><strong>fuerza:</strong>${personajes.fuerza}</p>
                <p><strong>anio_aparicion:</strong>${personajes.anio_aparicion}</p>
                `;
                dialog.showModal();
            })
            
            container.appendChild(contenedor);
        });
    
}
async function personajesfetch(){
    try{
        const res= await fetch('personajes.json');
        if(!res.ok){
            throw new Error("se aproducido un error");   
        }
        const personaje= await res.json();
        mostrar(personaje);
    }catch(error){
        console.error(error);
    }
}
personajesfetch();
const buttonclose = document.getElementById("button-class");
buttonclose.addEventListener('click',()=>{
    dialog.close();
});
})  








