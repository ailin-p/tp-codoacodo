let hdr = `<h1>Mascotienda</h1>
        <img src="img/pawprint.png" alt="paw">
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li class="dropdown">
                    <a href="#">Productos</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Comida</a></li>
                        <li><a href="#">Juguetes</a></li>
                        <li><a href="#">Ropa</a></li>
                        <li><a href="#">Accesorios</a></li>
                        <li><a href="#">Bebederos</a></li>
                        <li><a href="#">Comederos</a></li>
                        <li><a href="#">Collares</a></li>
                    </ul>
                </li>
                <li><a href="/contacto.html">Contacto</a></li>
            </ul>
        </nav>`;
       
let ftr = `<p>Mascotienda - Todos los derechos reservados</p>`;
        
document.getElementsByTagName("header").item(0).innerHTML=hdr;
document.getElementsByTagName("footer").item(0).innerHTML=ftr;

let prods = productos.filter(p => p.tags.some((x) => x == "destacado"))
let tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="producto">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <h4>Precio: ${prod.precio}</h4>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("productos").item(0).innerHTML=tarjeta;


prods = productos.filter(p => p.tags.some((x) => x == "novedad"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="novedad">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <h4>Precio: ${prod.precio}</h4>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("novedades").item(0).innerHTML=tarjeta;

