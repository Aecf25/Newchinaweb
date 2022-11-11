
const pintarcarrito = () => {
    modalcontainer.innerHTML = "";
    modalcontainer.style.display = "flex"
    const modalheader = document.createElement("div")
    modalheader.className = "modal-header"
    modalheader.innerHTML = `
    <h1 class= "modal-header-title">Pedido pendiente</h1>

    `;
    modalcontainer.append(modalheader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalcontainer.style.display = "none"
    });
    modalheader.append(modalbutton);

    const modaltabladesc = document.createElement("div");
    modaltabladesc.className = "modaltitulotabla"
    modaltabladesc.innerHTML = `
    <h2 id="descprod">Descrición Comida</h2>
    <h2 id="cantprod">Cantidad</h2>
    <h2 id="totalprod">Total</h2>
    `;
    modalcontainer.append(modaltabladesc);

    carrito.forEach((product) => {
        let carritocontent = document.createElement("div")
        carritocontent.className = "modal-content";
        carritocontent.innerHTML = `
        <img src= "${product.img}">
        <h3>${product.nombre}</h3>
        <p id="descripcion"> ${product.desc}</p>
        <p id="costound">REF ${product.precio * product.cantidad}</p>
        <p id="cantund">${product.cantidad}</p>
        
        `;
        modalcontainer.append(carritocontent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "deleteprod";
        carritocontent.append(eliminar);

        eliminar.addEventListener("click", eliminarproducto);
    });

    /* "el" es cualquier variable q representa los items o productos. "acc" es el total que empieza en 0 y se van sumando los precios*/
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalbuy = document.createElement("div")
    totalbuy.className = "total-content"
    totalbuy.innerHTML = `
    total a pagar: ${total} 
    `;
    modalcontainer.append(totalbuy);

};

/* Un manera (no probada) es colocar cada script en su respectiva pagina, a excepcion de products que va en todos los
que contengan elementos dentro de el; ademas se debe de colocar ---let carrito = []; al archivo "layout" que no contiene
el carrito, solo este archivo (carritopendiente.js) se queda en el layout para que funcione en todos.  /*


/* Si no funciona asi el carrito (no se guarda), colocar todos los script en layout*/

vercarritolayout.addEventListener("click", pintarcarrito);



const eliminarproducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    });
    carritocestacontar();
    pintarcarrito();
}


const carritocestacontar = () => {
    carritocestapend.style.display = "block"
    carritocestapend.innerText = carrito.length
}