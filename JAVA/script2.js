
let btn_enviar = document.getElementById("btn_enviar");
btn_enviar.addEventListener("click", mostrar);

function mostrar() {
    let nombre = "anonimo";
    let inputNombre = document.getElementById("inputNombre");
    nombre = inputNombre.value;

    let apellido = "anonimo";
    let inputApellido = document.getElementById("inputApellido");
    apellido = inputApellido.value;

    let edad = "anonimo";
    let inputEdad = document.getElementById("inputEdad");
    edad = inputEdad.value;

    alert("Bienvenidx " + nombre + " " + apellido + ". Edad: " + edad);
}