/*
    array.filter(variableInd => variableInd.atributo=="valor");
    cursos.filter(curso => curso.idioma=="ingles" && curso.establecimiento==1);

let contenidoCursos=document.querySelector("#cursos");
cursos.forEach((item)=>{
    contenidoCursos.innerHTML+=`
     <tr>
        <td> <i class="fa-solid fa-play"></i> </td>
        <td class="cancionAEscuchar"> ${item.nombre} </td>
        <td> ${item.idioma} </td>
        <td> ${item.horario} </td>
        <td> ${item.horario} </td>
        </tr>
   `;
});
let filtrar=document.querySelector("#filtrar");
filtrar.addEventListener("click",()=>{

    contenidoCursos.innerHTML="";

    let establecimiento=document.querySelector("#establecimiento").value;

    let idioma=document.querySelector("#idioma").value;

    let cursosFiltrados= cursos.filter(curso => curso.establecimiento ==establecimiento && curso.idioma==idioma);
 
    cursosFiltrados.forEach((item)=>{
        contenidoCursos.innerHTML+=`
       
            <table border="1" id="tablaCanciones">
                <td> <i class="fa-solid fa-play"></i> </td>
        <td class="cancionAEscuchar"> ${item.nombre} </td>
        <td> ${item.idioma} </td>
        <td> ${item.horario} </td>
        <td> ${item.horario} </td>
        </table>
            
        `;
    });
        
});
*/




let contenidoCursos = document.querySelector("#cursos");
let tablaCursos = document.querySelector("#tablaCanciones");

function todaslascanciones() {
    let contenidoTabla = "";

    cursos.forEach((item) => {
        contenidoTabla += `
            <tr>
                <td> <i class="fa-solid fa-play"></i> </td>
                <td class="cancionAEscuchar"> ${item.nombre} </td>
                <td> ${item.album} </td>
                <td> ${item.duracion} </td>
                <td> ${item.reproducciones} </td>
            </tr>
        `;
    });

    tablaCursos.innerHTML = `
        <table border="1" id="tablaCanciones">
            <tr>
                <th> </th>
                <th> Cancion </th>
                <th> Album </th>
                <th> Duración </th>
                <th> Reproducciones </th>
            </tr>
            ${contenidoTabla}
        </table>
    `;
}

todaslascanciones();
document.querySelector("#filtrar").addEventListener("click", () => {
let cancion = document.querySelector("#establecimiento").value;
let album = document.querySelector("#establecimiento2").value;

let cursosFiltrados = cursos.filter(curso => curso.establecimiento == cancion && curso.establecimiento2 == album);

let contenidoTabla = "";

cursosFiltrados.forEach((item) => {
    contenidoTabla += `
        <tr>
            <td> <i class="fa-solid fa-play"></i> </td>
            <td class="cancionAEscuchar"> ${item.nombre} </td>
            <td> ${item.album} </td>
            <td> ${item.duracion} </td>
            <td> ${item.reproducciones} </td>
        </tr>
    `;
});

tablaCursos.innerHTML = `
    <table border="1" id="tablaCanciones">
        <tr>
            <th> </th>
            <th> Cancion </th>
            <th> Album </th>
            <th> Duración </th>
            <th> Reproducciones </th>
        </tr>
        ${contenidoTabla}
    </table>
`;
});
