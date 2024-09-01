window.onload = function(){
let cerrarPopup = document.querySelector("#cerrar-popup")
let contenedorPopup = document.querySelector(".contenedor-popup")
let popup = document.querySelector("#popup")



cerrarPopup.addEventListener("click", ()=>{
    popup.classList.add("d-none")

  })
}