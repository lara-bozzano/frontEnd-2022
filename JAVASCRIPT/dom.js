let contador = 0;

let botonSumar = document.getElementById("sumarClicks");
botonSumar.addEventListener("click", sumarClicks);

let botonRestar = document.getElementById("restarClicks");
botonRestar.addEventListener("click", restarClicks);

let botonMostrar = document.getElementById("mostrarCantClicks");
botonMostrar.addEventListener("click", mostrarClicks);

function sumarClicks(){
    contador++;
    document.querySelector("h2").innerHTML = contador;
}

function restarClicks(){
    contador--;
    document.querySelector("h2").innerHTML = contador;
}

function mostrarClicks(){
    document.querySelector("h2").innerHTML = contador;
}