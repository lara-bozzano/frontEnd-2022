let btn_agregar = document.getElementById("botonAgregar");
btn_agregar.addEventListener("click", agregarElem);


function agregarElem() {
    
    let input = document.getElementById("input");
    let agregarLista = document.querySelector("ol");
    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = input.value;

    agregarLista.appendChild(nuevaTarea);
}