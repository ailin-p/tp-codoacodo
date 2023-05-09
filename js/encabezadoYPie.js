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
                        <li><a href="otroAnimal.html">Otros Animales</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#">Productos</a>
                    <ul class="dropdown-menu">
                        <li><a href="alimento.html">Alimentación</a></li>
                        <li><a href="accesorio.html">Accesorios</a></li>
                        <li><a href="salud.html">Salud</a></li>
                    </ul>
                </li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
            <div id="nav-icons">
            <a href="#"><img src="img/user.png" alt="user-account"></a>
            <a href="#"><img src="img/shoppingcart.png" alt="shopping-cart"></a>
            </div>
        </nav>
        `;
       
let ftr = `<div id="social-icons">
            <img src="/img/instagram.png" alt="instagram-icon">
            <img src="/img/facebook.png" alt="facebook-icon">
            </div>
            <p class="brand-name">MASCOTIENDA</p>`;
        
document.getElementsByTagName("header").item(0).innerHTML=hdr;
document.getElementsByTagName("footer").item(0).innerHTML=ftr;