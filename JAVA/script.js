    "use strict";
    
    let contador = 0;


    function clicks() {
    contador++;
    console.log("Hiciste " + contador + " clicks");
    }

    let btn_clicks = document.getElementById("btn_clicks");
    btn_clicks.addEventListener("click", clicks);



    function contarClicks() {
        alert("Hiciste " + contador + " clicks");
        } 

    let btn_mostrar = document.getElementById("btn_mostrar");
    btn_mostrar.addEventListener("click", contarClicks);