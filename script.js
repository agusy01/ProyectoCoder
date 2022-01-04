localStorage.setItem('carrito', JSON.stringify([]))
let divProductosSuculentas = document.getElementById("divProductosSuculentas")
let divProductosCactus = document.getElementById("divProductosCactus")
let divProductosAccesorios = document.getElementById("divProductosAccesorios")
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador;


fetch('../productos.json')
.then(response => response.json())
.then(dataProductos => {
    dataProductos.filter((productoEnArray) => productoEnArray.id <= 10).forEach((productoEnArray, indice)=> {

        divProductosSuculentas.innerHTML += `
        <div class="card bg-light mb-3" id="producto${indice}" style="max-width: 20rem; margin:8px">
            <div class="card-header">${productoEnArray.nombre}</div>
            <img src="../img/${productoEnArray.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">$${productoEnArray.precio}</p>
                <button id="boton${indice}" class="btn btn-dark"><i class="fas fa-cart-plus fa-1x"></i></button>
            </div>
        </div>
        `
    });
    dataProductos.filter((productoEnArray, indice) => indice <= 9).forEach((productoEnArray, indice) => {
        document.getElementById(`boton${indice}`).addEventListener('click', () => {
            if(productos.find(producto => producto.nombre == productoEnArray.nombre)) {
                let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre)
                productos[index].cant++
                localStorage.setItem('carrito', JSON.stringify(productos))
            } else {
                let nuevoProducto = new Producto(productoEnArray.nombre, productoEnArray.precio, 
                productoEnArray.img)
                productos.push(nuevoProducto)
                localStorage.setItem('carrito', JSON.stringify(productos))
            }
        })
    })
})



fetch('../productos.json')
.then(response => response.json())
.then(dataProductos => {
    dataProductos.filter((productoEnArray) => productoEnArray.id >10 && productoEnArray.id <= 20).forEach((productoEnArray, indice)=> {

        divProductosCactus.innerHTML += `
        <div class="card bg-light mb-3" id="producto${indice}" style="max-width: 20rem; margin:8px">
            <div class="card-header">${productoEnArray.nombre}</div>
            <img src="../img/${productoEnArray.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">$${productoEnArray.precio}</p>
                <button id="boton${indice}" class="btn btn-dark"><i class="fas fa-cart-plus fa-1x"></i></button>
            </div>
        </div>
        `
    });
    dataProductos.filter((productoEnArray) => productoEnArray.id >10 && productoEnArray.id <= 20).forEach((productoEnArray, indice) => {
        document.getElementById(`boton${indice}`).addEventListener('click', () => {
            if(productos.find(producto => producto.nombre == productoEnArray.nombre)) {
                let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre)
                productos[index].cant++
                localStorage.setItem('carrito', JSON.stringify(productos))
            } else {
                let nuevoProducto = new Producto(productoEnArray.nombre, productoEnArray.precio, 
                productoEnArray.img)
                productos.push(nuevoProducto)
                localStorage.setItem('carrito', JSON.stringify(productos))
            }
        })
    })
})



fetch('../productos.json')
.then(response => response.json())
.then(dataProductos => {
    dataProductos.filter((productoEnArray) => productoEnArray.id > 20).forEach((productoEnArray, indice)=> {

        divProductosAccesorios.innerHTML += `
        <div class="card bg-light mb-3" id="producto${indice}" style="max-width: 20rem; margin:8px">
            <div class="card-header">${productoEnArray.nombre}</div>
            <img src="../img/${productoEnArray.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">$${productoEnArray.precio}</p>
                <button id="boton${indice}" class="btn btn-dark"><i class="fas fa-cart-plus fa-1x"></i></button>
            </div>
        </div>
        `
    });
    dataProductos.filter((productoEnArray ) => productoEnArray.id > 20).forEach((productoEnArray, indice) => {
        document.getElementById(`boton${indice}`).addEventListener('click', () => {
            if(productos.find(producto => producto.nombre == productoEnArray.nombre)) {
                let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre)
                productos[index].cant++
                localStorage.setItem('carrito', JSON.stringify(productos))
            } else {
                let nuevoProducto = new Producto(productoEnArray.nombre, productoEnArray.precio, 
                productoEnArray.img)
                productos.push(nuevoProducto)
                localStorage.setItem('carrito', JSON.stringify(productos))
            }
        })
    })
})


