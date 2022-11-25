const listadeCompras = document.getElementById('containermenu1');
const vercarritolayout = document.getElementById("carritomodal");
const modalcontainer = document.getElementById("modalventana");
const carritocestapend = document.getElementById("cestacarritopend");
const cuerpopagina = document.querySelector("#cuerpoppal");
const modalproductoventana = document.getElementById("modalproductoventana")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


comida.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card1"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="descproducto">${product.desc}</p>
        <p class="precioproducto">Ref. ${product.precio}</p>
    `;
    listadeCompras.append(content);

    let ventanaproducto = document.createElement("button");
    ventanaproducto.className = "ventanaproductoboton"
    ventanaproducto.innerHTML = `
    Agregar
         <span></span>
         <span></span>
         <span></span>
         <span></span>
     `;
    content.append(ventanaproducto);
    ventanaproducto.addEventListener("click", () => { productoindividualventana(); });

    const productoindividualventana = ("click", () => {
        modalproductoventana.innerHTML = "";
        modalproductoventana.style.display = "flex";
        const cuadroproductoindividual = document.createElement("div");
        cuadroproductoindividual.className = "cuadroproduct"
        cuadroproductoindividual.style.display = "flex"
        cuadroproductoindividual.innerHTML = `
        <img src="${product.img}">
        <h2> ${product.nombre}</h2>
        <p class="descproducto">${product.desc}</p>
        <p class="cantproducto"><p class="cantproductonum">${product.cantidad, (product.cantidad < 10) ? "0" + product.cantidad : product.cantidad}</p></p>
        <p class="precioproducto">Ref. ${product.precio * product.cantidad}</p>`;
        modalproductoventana.append(cuadroproductoindividual);


        const modalbutton = document.createElement("h1");
        modalbutton.innerText = "✖";
        modalbutton.className = "modal-header-button";

        modalbutton.addEventListener("click", () => {
            cerrarventana();
        });



        cuadroproductoindividual.append(modalbutton);

        let mascantidad = document.createElement("button");
        mascantidad.className = "bttnplus"
        mascantidad.innerHTML = `
        <p>+</p>`;
        mascantidad.addEventListener("click", () => {
            product.cantidad++;
            productoindividualventana();
            savelocal()
        });

        cuadroproductoindividual.append(mascantidad);

        let menoscantidad = document.createElement("button");
        menoscantidad.className = "bttnmin"
        menoscantidad.innerHTML = `
        <p>_</p>`;
        menoscantidad.addEventListener("click", () => {
            if (product.cantidad > 1) {
                product.cantidad--;
                productoindividualventana();
                savelocal();
            };

        });
        cuadroproductoindividual.append(menoscantidad);


        let comprar = document.createElement("button");
        comprar.className = "botonagregar"
        comprar.innerHTML = `
        Agregar
        `;
        cuadroproductoindividual.append(comprar);
        comprar.addEventListener("click", () => {
            const repeat = carrito.some((repeatproduct) => repeatproduct.id === product.id);

            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        return prod.cantidad+=product.cantidad;
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
            savelocal();
            cerrarventana();
        });
        cuerpopagina.style.filter = "blur(.2vw)";
        modalproductoventana.style.opacity = "1";
        modalproductoventana.style.transform = "translateY(5%)"
        modalproductoventana.style.transform = "translateX(0%)"
    });
});

const listadeCompras2 = document.getElementById('containermenu2');

comida2.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card1"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="descproducto">${product.desc}</p>
        <p class="precioproducto">Ref. ${product.precio}</p>
    `;
    listadeCompras2.append(content);



    let comprar = document.createElement("button");
    comprar.className = "button"
    comprar.innerHTML = `
    Agregar
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
        savelocal();
    })
});

const listadeCompras4 = document.querySelector('#containermenu3entremes');

comida4.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card1"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="descproducto">${product.desc}</p>
        <p class="precioproducto">Ref. ${product.precio}</p>
    `;
    listadeCompras4.append(content);


    let comprar = document.createElement("button");
    comprar.className = "button"
    comprar.innerHTML = `
    Agregar
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
        savelocal()
    })
});

const listadeCompras5 = document.querySelector('#containermenu4entremes');

comida5.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card1"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="descproducto">${product.desc}</p>
        <p class="precioproducto">Ref. ${product.precio}</p>
    `;
    listadeCompras5.append(content);


    let ventanaproducto = document.createElement("button");
    ventanaproducto.className = "ventanaproductoboton"
    ventanaproducto.innerHTML = `
    Agregar
         <span></span>
         <span></span>
         <span></span>
         <span></span>
     `;
    content.append(ventanaproducto);
    ventanaproducto.addEventListener("click", () => {
        modalproductoventana.innerHTML = "";
        modalproductoventana.style.display = "flex";
        const cuadroproductoindividual = document.createElement("div");
        cuadroproductoindividual.className = "cuadroproduct"
        cuadroproductoindividual.style.display = "flex"
        cuadroproductoindividual.innerHTML = `
        <img src="${product.img}">
        <h2> ${product.nombre}</h2>
        <p class="descproducto">${product.desc}</p>
        <p class="precioproducto">Ref. ${product.precio}</p>`;
        modalproductoventana.append(cuadroproductoindividual);


        const modalbutton = document.createElement("h1");
        modalbutton.innerText = "x";
        modalbutton.className = "modal-header-button";

        modalbutton.addEventListener("click", () => {

            modalproductoventana.style.opacity = "0"
            modalproductoventana.style.transition = "opacity 1s"
            modalproductoventana.style.transition = "all 2s"
            modalproductoventana.style.transform = "translateY(-500%)"




            cuerpopagina.style.transition = "filter 1s"
            cuerpopagina.style.filter = "blur(0vw)";

        });
        cuadroproductoindividual.append(modalbutton);



        cuerpopagina.style.filter = "blur(.2vw)";
        modalproductoventana.style.opacity = "1";
        modalproductoventana.style.transform = "translateY(5%)"
        modalproductoventana.style.transform = "translateX(0%)"
    })
});


const cerrarventana = ("click", () =>{
    modalproductoventana.style.opacity = "0"
    modalproductoventana.style.transition = "opacity 1s"
    modalproductoventana.style.transition = "all 2s"
    modalproductoventana.style.transform = "translateY(-500%)"




    cuerpopagina.style.transition = "filter 1s"
    cuerpopagina.style.filter = "blur(0vw)";

});