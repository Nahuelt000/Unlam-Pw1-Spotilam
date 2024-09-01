document.addEventListener("DOMContentLoaded", function () { 
    let cancionSonando = document.getElementById("cancionSonando");
    /*evalua si se encuentra en un documento en el que se puede elegir cancion o uno en el que solo se muestra*/ 
    if (document.querySelector("#cancionSonando") && document.querySelector(".cancionAEscuchar")) {
        let canciones = document.querySelectorAll(".cancionAEscuchar");

        for (let i = 0; i < canciones.length; i++) {
            canciones[i].addEventListener("click", function (event) {
                let contenido = event.target.textContent;
                localStorage.setItem('cancionActual', contenido);
                let cancionElegida = localStorage.getItem('cancionActual');
                cancionSonando.textContent = "Escuchando: " + cancionElegida;
            });
        }
    }
    if (document.querySelector("#cancionSonando")) {
        let cancionElegida = localStorage.getItem('cancionActual');
        cancionSonando.textContent = "Escuchando: " + cancionElegida;
    }
});
/*para que aparezca hay que hacer clic en el nombre de una cancion(por el momento solo se puede en las vistas 
    musica sonando y mis favoritas)*/
