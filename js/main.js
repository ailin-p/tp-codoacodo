const btnCart = document.querySelector('.cart')
const containerCartProducts = document.querySelector('.carrito')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('carrito')
})



let prods = productos.filter(p => p.tags.some((x) => x == "destacado"))
let tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="producto">
                <div class="item">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4>$<div class="precio">${prod.precio}</div></h4>
                <p class="descrip">${prod.descripcion}</p>
                <button class="btnArt">Comprar</button>
                </div>
                </article>`);  
}
document.getElementsByClassName("productos")[0].innerHTML=tarjeta;


prods = productos.filter(p => p.tags.some((x) => x == "novedad"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="novedad">
                <div class="item">    
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4>$<div class="precio">${prod.precio}</div></h4>
                <p class="descrip">${prod.descripcion}</p>
                <button class="btnArt">Comprar</button>
                </div>
                </article>`);  
}
document.getElementsByClassName("novedades")[0].innerHTML=tarjeta;

