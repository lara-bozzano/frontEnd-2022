let btn_cargar = document.getElementById("btn_cargar");
btn_cargar.addEventListener("click", guardarTarea);

let btn_limpiar = document.getElementById("btn_limpiar");
btn_limpiar.addEventListener("click", limpiarLista);


function guardarTarea(){
    //let tarea = "anonimo";
    let inputTarea = document.getElementById("inputTarea");
    //tarea = inputTarea.value;

    let miDiv = document.querySelector("div");

   let nuevaTarea = document.createElement("li");
   nuevaTarea.innerHTML = inputTarea.value;

miDiv.appendChild(nuevaTarea);
}

function limpiarLista(){
    
}