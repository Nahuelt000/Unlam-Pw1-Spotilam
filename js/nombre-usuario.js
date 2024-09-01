document.addEventListener("DOMContentLoaded", function(){
    if (document.querySelector("#Usuario")) {
        document.querySelector("#Enviar").addEventListener("click", function () {
            let nombreUsuario = document.getElementById("Usuario").value;
            localStorage.setItem('usuarioNombre', nombreUsuario);
        });
    }
    if (document.querySelector("#nombreUsuario")) {
        
        let nombreUsuario = localStorage.getItem('usuarioNombre');
        document.querySelector("#nombreUsuario").textContent = nombreUsuario;
    }
})