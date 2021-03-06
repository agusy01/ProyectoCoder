/* Precio compra total */
function compraTotal(productosDelStorage) {
    acumulador = 0;
    productosDelStorage.forEach((productoCarrito) => {
        acumulador += productoCarrito.precio * productoCarrito.cant
    })

    if(acumulador == 0) {
        parrafoCompra.innerHTML = ""
        modalBody.innerHTML = "<p>No hay productos agregados en el carrito </p>" 
    } else {
        parrafoCompra.innerHTML = `Importe total $${new Intl.NumberFormat("de-DE").format(acumulador)}`
    }
}

/* Carga de eventos al modal */
function cargarEventosModal(productosDelStorage) {

    productosDelStorage.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${indice}`).addEventListener('click', () => {
            console.log(`Producto ${productoCarrito.nombre} eliminado`)
            document.getElementById(`productoCarrito${indice}`).remove()
            productos.splice(indice, 1)
            localStorage.setItem('carrito', JSON.stringify(productos))
            cargarProductosModal(JSON.parse(localStorage.getItem('carrito')))
        })
    })

    productosDelStorage.forEach((productoCarrito, indice) => {
        document.getElementById(`sum${indice}`).addEventListener('click', () => {
            console.log()
            if(productos[indice].cant ) {
                productos[indice].cant++
                localStorage.setItem('carrito', JSON.stringify(productos))
                cargarProductosModal(JSON.parse(localStorage.getItem('carrito')))
                
            }
        })
    })

    productosDelStorage.forEach((productoCarrito, indice) => {
        document.getElementById(`rest${indice}`).addEventListener('click', () => {
            console.log()
            if(productos[indice].cant > 1) {
                productos[indice].cant--
                localStorage.setItem('carrito', JSON.stringify(productos))
                cargarProductosModal(JSON.parse(localStorage.getItem('carrito')))
            }
        })
    })
}

/* Carga de productos al modal */
function cargarProductosModal(productosDelStorage) {

    modalBody.innerHTML = " "  
    productosDelStorage.forEach((productoCarrito, indice) => {
        
        modalBody.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${indice}" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="../img/${productoCarrito.img}" class=" rounded-start" alt="...">
                </div>
            <div class="col-md-8">
                <div class="card-body">

                <h5 class="card-title">${productoCarrito.nombre}</h5>
                <div class="row">
                    <p class="card-text">Cantidad: ${productoCarrito.cant}</p>
                    <button class= "btn btn-outline-secondary botonSumRes" id="sum${indice}"><i class="fas fa-plus "></i></button>
                    <button class= "btn btn-outline-secondary botonSumRes" id="rest${indice}"><i class="fas fa-minus"></i></button> 
                </div>
                <p class="card-text">$${productoCarrito.precio}</p> 
                <button class= "btn btn-danger" id="botonEliminar${indice}"><i class="fas fa-trash-alt"></i></button>
            </div>
            </div>
            </div>
        </div>
    `
    
})
cargarEventosModal(productosDelStorage)
compraTotal(productosDelStorage)
}

/* boton carrito para abrir modal */
botonCarrito.addEventListener('click', () => {
    let productosDelStorage = JSON.parse(localStorage.getItem('carrito'))
    cargarProductosModal(productosDelStorage)
})

/* Boton finalizar compra */
botonFinalizarCompra.addEventListener('click', () => {
    localStorage.setItem('carrito', JSON.stringify([]))
    swal("Gracias por su compra!", "Los productos seran enviados en la brevedad", "success");
})


