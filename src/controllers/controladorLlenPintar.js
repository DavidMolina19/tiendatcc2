                                                                                                                           export function pintarProductos(productos){
    
    //1. Crear una referencia en memoria que traiga el htmal sobre el cual voy a pintar 
    let fila=document.getElementById("fila")
    fila.innerHTML=""

    //2. recorrer el arreglo de datos 
    productos.forEach(function(producto){
        
        // creamos lo que necesitamos
        // creamos columna
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","text-center")
       
        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto[0]


        let nombreProducto=document.createElement("h3")
        nombreProducto.textContent=producto.nombre

        let descripcion=document.createElement("p")
        descripcion.classList.add("d-none")
        descripcion.textContent=producto.descripcion

        let precioProducto=document.createElement("h2")
        precioProducto.classList.add("fw-bold")
        precioProducto.textContent="$"+producto.precio+"$"
        

        // deteccion de mouse 
        columna.addEventListener("mouseover",function(evento){
            foto.src=producto.foto[1]
        })
        
        columna.addEventListener("mouseleave",function(evento){
            foto.src=producto.foto[0]
        
        })
         
        columna.addEventListener("click",function(evento){
            foto.src=producto.foto[0]
        
        })
    

        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombreProducto)
        tarjeta.appendChild(precioProducto)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

        
})

 }

