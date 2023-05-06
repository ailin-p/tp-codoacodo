let hdr = `<h1>Mascotienda</h1>
        <img src="img/pawprint.png" alt="paw">
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li class="dropdown">
                    <a href="#">Mascota</a>
                    <ul class="dropdown-menu">
                        <li><a href="perro.html">Perro</a></li>
                        <li><a href="gato.html">Gato</a></li>
                        <li><a href="otrosAnimales.html">Otros Animales</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">Productos</a>
                    <ul class="dropdown-menu">
                        <li><a href="alimentacion.html">Alimentación</a></li>
                        <li><a href="accesorios.html">Accesorios</a></li>
                        <li><a href="salud.html">Salud</a></li>
                    </ul>
                </li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>`;
       
let ftr = `<p>Mascotienda - Todos los derechos reservados</p>`;
        
document.getElementsByTagName("header").item(0).innerHTML=hdr;
document.getElementsByTagName("footer").item(0).innerHTML=ftr;