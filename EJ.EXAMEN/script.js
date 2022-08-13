let btn_cargar = document.getElementById("btn_cargar");
btn_cargar.addEventListener("click", guardarTarea);

let btn_limpiar = document.getElementById("btn_limpiar");
btn_limpiar.addEventListener("click", limpiarLista);

btn_cargar.classList.add("estiloBotones");
btn_limpiar.classList.add("estiloBotones");

function guardarTarea(){
    let inputTarea = document.getElementById("inputTarea");

    let miDiv = document.querySelector("div");

   let nuevaTarea = document.createElement("li");
   nuevaTarea.innerHTML = inputTarea.value;
    miDiv.appendChild(nuevaTarea);

    nuevaTarea.classList.add("estiloLista");
}

function limpiarLista(){
    miDiv.innerHTML = " ";
}