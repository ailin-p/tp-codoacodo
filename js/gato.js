const btnCart = document.querySelector('.cart')
const containerCartProducts = document.querySelector('.carrito')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('carrito')
})

let gatos = productos.filter(p => p.tags.some((x) => x == "gato"))
prods = gatos.filter(p => p.tags.some((x) => x == "destacado"))
let tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="destacado">
    <div class="item">
    <img src="${prod.foto}" alt="${prod.nombre}">
<h3>${prod.nombre}</h3>
<h4><div class="precio">$${prod.precio}</div></h4>
<p class="descrip">${prod.descripcion}</p>
<button class="btnArt">Comprar</button>
</div>
                </article>`);  
}
document.getElementsByClassName("destacados")[0].innerHTML=tarjeta;

prods = gatos.filter(p => p.tags.some((x) => x == "alimento"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="alimento">
    <div class="item">
    <img src="${prod.foto}" alt="${prod.nombre}">
<h3>${prod.nombre}</h3>
<h4><div class="precio">$${prod.precio}</div></h4>
<p class="descrip">${prod.descripcion}</p>
<button class="btnArt">Comprar</button>
</div>
                </article>`);  
}
document.getElementsByClassName("alimentos")[0].innerHTML=tarjeta;

prods = gatos.filter(p => p.tags.some((x) => x == "accesorio"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="accesorio">
    <div class="item">
    <img src="${prod.foto}" alt="${prod.nombre}">
<h3>${prod.nombre}</h3>
<h4><div class="precio">$${prod.precio}</div></h4>
<p class="descrip">${prod.descripcion}</p>
<button class="btnArt">Comprar</button>
</div>
                </article>`);  
}
document.getElementsByClassName("accesorios")[0].innerHTML=tarjeta;

prods = gatos.filter(p => p.tags.some((x) => x == "salud"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="salud">
    <div class="item">
    <img src="${prod.foto}" alt="${prod.nombre}">
<h3>${prod.nombre}</h3>
<h4><div class="precio">$${prod.precio}</div></h4>
<p class="descrip">${prod.descripcion}</p>
<button class="btnArt">Comprar</button>
</div>
                </article>`);  
}
document.getElementsByClassName("saludes")[0].innerHTML=tarjeta;

