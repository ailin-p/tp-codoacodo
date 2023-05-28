const btnCart = document.querySelector('.cart')
const containerCartProducts = document.querySelector('.carrito')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('carrito')
})

let alimentos = productos.filter(p => p.tags.some((x) => x == "alimento"))
prods = alimentos.filter(p => p.tags.some((x) => x == "destacado"))
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

prods = alimentos.filter(p => p.tags.some((x) => x == "gato"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="gato">
                        <div class="item">
                        <img src="${prod.foto}" alt="${prod.nombre}">
                    <h3>${prod.nombre}</h3>
                    <h4><div class="precio">$${prod.precio}</div></h4>
                    <p class="descrip">${prod.descripcion}</p>
                    <button class="btnArt">Comprar</button>
                    </div>
                </article>`);  
}
document.getElementsByClassName("gatos")[0].innerHTML=tarjeta;

prods = alimentos.filter(p => p.tags.some((x) => x == "perro"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="perro">
                    <div class="item">
                    <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4><div class="precio">$${prod.precio}</div></h4>
                <p class="descrip">${prod.descripcion}</p>
                <button class="btnArt">Comprar</button>
</div>
                </article>`);  
}
document.getElementsByClassName("perros")[0].innerHTML=tarjeta;

prods = alimentos.filter(p => p.tags.some((x) => x == "otroAnimal"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="otroAnimal">
                    <div class="item">
                    <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4><div class="precio">$${prod.precio}</div></h4>
                <p class="descrip">${prod.descripcion}</p>
                <button class="btnArt">Comprar</button>
</div>
                </article>`);  
}
document.getElementsByClassName("otrosAnimales")[0].innerHTML=tarjeta;

