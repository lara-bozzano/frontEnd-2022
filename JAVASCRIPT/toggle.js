let botonTogglear = document.getElementById("botonTogglear");
botonTogglear.classList.add("estilo");
botonTogglear.addEventListener("click", functionTogglear);

function functionTogglear(){
    document.querySelector("div").classList.toggle("ocultar");
}