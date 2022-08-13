let botonSumar = document.getElementById("botonSumar");
botonSumar.addEventListener("click", sumar);

let botonRestar = document.getElementById("botonRestar");
botonRestar.addEventListener("click", restar);

let inputUno = document.getElementById("inputUno");
let inputDos = document.getElementById("inputDos");

botonSumar.classList.add("estiloBotones");
botonRestar.classList.add("estiloBotones");

function sumar(){
    let suma = 0;
    let num1 = 0;
    let num2 = 0;

    num1 = inputUno.value;
    num2 = inputDos.value;
   
    suma = (num1 + num2);

    let nuevoElemento = document.querySelector("div");
    let agregarElemento = document.createElement("p");
    agregarElemento.innerHTML = "El resultado es: " + suma;

    nuevoElemento.appendChild(agregarElemento);

    nuevoElemento.classList.add("estiloElemento");
    
} 

function restar(){
    let resta = 0;
    let num1;
    let num2;

    num1 = inputUno.value;
    num2 = inputDos.value;

    resta = (num1 - num2);

    let nuevoElemento = document.querySelector("div");
    let agregarElemento = document.createElement("p");
    agregarElemento.innerHTML = "El resultado es: " + resta;

    nuevoElemento.appendChild(agregarElemento);

    nuevoElemento.classList.add("estiloElemento");
}
