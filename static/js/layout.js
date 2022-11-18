
const listadeCompras3 = document.querySelector('#containermenu3');


comida3.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card1"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.desc}</p>
    `;
    listadeCompras3.append(content);


    let comprar = document.createElement("button");
    comprar.className = "button"
    comprar.innerHTML = `
    Ref ${product.precio}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span><p>Agregar a la Cesta</p></span>
    `;
    content.append(comprar);
    comprar.addEventListener("click", () =>{
        const repeat = carrito.some((repeatproduct) => repeatproduct.id === product.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                desc: product.desc,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        carritocestacontar();
        savelocal()
    })
});

