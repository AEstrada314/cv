let main= document.getElementById("main")
let home= main.innerHTML

function botonfa () {
    main.innerHTML=`<ul>Formación Académica

    <li>Profesor de Ciencias Sociaeles con orientación a Historia. Instituto del profesorado Dr. Antonio Sobral </li>
    <li>Primera etapa del curso #Séprogramar. INTI </li>
    <li>Curso de Inglés avanzado.Red 21.com</li>
</ul>
    <button onclick="volver()">Home</button>
`
}

function volver() {
    main.innerHTML = home
}
function botonha () {
    main.innerHTML=`
    Comunicación <br>
    Resolución de conflictos<br>
    Organización<br>
    Comunicación oral y escrita<br>
    Empatía<br>
    Pensamiento crítico<br>
    Ética<br>
    Responsabilidad<br>
    Escucha activa<br>
    Actitud positiva<br>
    Tolerancia a la presión<br>
    Innovación<br>
    Iniciativa <br>
    Relaciones interpersonales<br>
    <button onclick="volver()">Home</button>
`
}
function botonexp () {
    main.innerHTML=`   <ul> Mis trabajos
    <li>Instituto La Inmaculada. Profesor de Historia</li>
    <li>IPEM 16. Profesor de Sociologia</li>
    
    <button onclick="volver()">Home</button>
`
}