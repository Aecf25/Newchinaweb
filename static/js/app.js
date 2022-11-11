const listadeCompras = document.querySelector('#containermenu1');
const vercarritolayout = document.getElementById("carritomodal");
const modalcontainer = document.getElementById("modalventana");
const carritocestapend = document.getElementById("cestacarritopend");

let carrito = [];

comida.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card1"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.desc}</p>
    `;
    listadeCompras.append(content);

    let comprar = document.createElement("button");
    comprar.className = "button"
    comprar.innerHTML = `
    REF ${product.precio}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    `;
    content.append(comprar);
    comprar.addEventListener("click", () => {
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
    })
});

const listadeCompras2 = document.querySelector('#containermenu2');

comida2.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card1"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.desc}</p>
    `;
    listadeCompras2.append(content);


    let comprar = document.createElement("button");
    comprar.className = "button"
    comprar.innerHTML = `
    REF ${product.precio}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    `;
    content.append(comprar);
    comprar.addEventListener("click", () => {
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
    })
});


