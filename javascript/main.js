const productos = [
    { nombre: "perros", precio: 800 },
    { nombre: "gatos", precio: 900 },
    { nombre: "peces", precio: 300 },
];

let carrito = []

let seleccion = prompt("Hola, desea comprar alimento  balanceado para mascotas? Escriba si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("Hola, desea comprar algún alimento balanceado?")
}
if(seleccion == "si"){
    alert ("Nuestros alimentos disponibles son:")
    let todoslosProductos = productos.map((producto) => producto.nombre + "" + producto.precio + "$");
    alert (todoslosProductos.join( " - " ))
} else if (seleccion == "no"){
    alert ("Gracias por visitar nuestro sitio")
}

while (seleccion != "no"){
    let producto = prompt ("Agrega un producto a tu carrito")
    let precio = 0

    if (producto == "perros" || producto == "gatos" || producto == "peces"){
        switch (producto) {
            case "perros":
            precio = 800;
            break;
            case "gatos":
            precio = 900;
            break;
            case "peces":
            precio = 300;
            break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuántas unidades desea llevar?"))
        carrito.push({producto, unidades, precio})
        console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando? Ingrese si o no")

    while (seleccion == "no"){
        alert ("Gracias por la compra")
        carrito.forEach((carritoFinal) =>{
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })

        break;
    } 
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert (`El total a pagar por su compra es: ${total}`)