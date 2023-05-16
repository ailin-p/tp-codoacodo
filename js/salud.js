let saludes = productos.filter(p => p.tags.some((x) => x == "salud"))
prods = saludes.filter(p => p.tags.some((x) => x == "destacado"))
let tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="destacado">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <h4>$${prod.precio}</h4>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("destacados")[0].innerHTML=tarjeta;

prods = saludes.filter(p => p.tags.some((x) => x == "gato"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="gato">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <h4>$${prod.precio}</h4>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("gatos")[0].innerHTML=tarjeta;

prods = saludes.filter(p => p.tags.some((x) => x == "perro"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="perro">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <h4>$${prod.precio}</h4>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("perros")[0].innerHTML=tarjeta;

prods = saludes.filter(p => p.tags.some((x) => x == "otroAnimal"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="otroAnimal">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <h4>$${prod.precio}</h4>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("otrosAnimales")[0].innerHTML=tarjeta;

