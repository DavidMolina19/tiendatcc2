console.log("hola estamos readys")
console.log( JSON.parse   (localStorage.getItem('infoProducto')))
let producto=JSON.parse   (localStorage.getItem('infoProducto'))

let carrito2
//verificar si hay productos en el carrito

(JSON.parse(localStorage.getItem("carrito")))
if(JSON.parse(localStorage.getItem("carrito"))==null){
     carrito2=[]

} else {
    carrito2=JSON.parse(localStorage.getItem("carrito"))

}

//pintamos la foto desde el objeto del local storage
let fotico=document.getElementById("fotico")
//fotico.src=producto.foto 


let nombre=document.getElementById("nombre")
nombre.textContent = producto.nombre

let precio=document.getElementById("precio")
precio.textContent=producto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=producto.descripcion


// capturar la canrida del producto selecionado
// capturar el value del input



// agrego un nuevo atributo al objeto producto

let carrito=document.getElementById("carrito")

// creamos el carrito de compras 



carrito.addEventListener("click", function(evento){

     let alerta=document.getElementById("alerta")
     alerta.classList.remove("invisible")

     setTimeout(function(){
        alerta.classList.add("invisible")
     },3000)

    let cantidad=document.getElementById("cantidad").value
    producto.cantidad=cantidad
    
   
    //agregando un nuevo elemento a un arreglo
    carrito2.push(producto)

    //almaceno el carrito en el localstorage
    localStorage.setItem("carrito",JSON.stringify(carrito2))

    
})


