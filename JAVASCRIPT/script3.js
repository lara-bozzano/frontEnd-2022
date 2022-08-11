//Agrega elementos a Mi Lista
let btn_agregar = document.getElementById("botonAgregarElem");
btn_agregar.addEventListener("click", agregarElem);

function agregarElem() {
    
    let input = document.getElementById("input");
    let agregarLista = document.querySelector("ol");
    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = input.value;

    agregarLista.appendChild(nuevaTarea);
}

//Agrega parrafo al Div
let btn_agregarParrafo = document.getElementById("botonAgregarParrafo");
btn_agregarParrafo.addEventListener("click", agregarParrafo);

function agregarParrafo(){
    let divParrafo = document.getElementById("divParrafo");
    let nuevoParrafo = document.createElement("p");
    let inputParrafo = document.getElementById("inputParrafo");
    nuevoParrafo.innerHTML = inputParrafo.value;

    divParrafo.appendChild(nuevoParrafo);
}