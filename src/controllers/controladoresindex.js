//entradas== variables
let nombre="juan"



//controlando etiquetas
//1. necestio almacenar una etiqueta en una variable 
let titulo=document.getElementById("titulo")
let imagen=document.getElementById("foto")
let titulo2=document.getElementById("titulo2")
let boton=document.getElementById("boton")
//2. identifico que quiero controlar
//2.1 cambio el texto
// titulo.textContent="chao"

//2.2 cambiando la fuente src

// imagen.src="https://placeimg.com/640/480/any"


//3. MODIFICANDO ESTILOS
//3.1. AGREGANDO UNA CLASE
titulo.classList.add('text-danger','fuente2') 

//3.2. quitando una clase 
titulo2.classList.remove('text-info')
titulo.classList.add('text-danger')


//4. ESCUCHANDO EVENTOS
boton.addEventListener("click",function(){
    titulo.textContent="chao"
    imagen.src="https://placeimg.com/640/480/any"
})



