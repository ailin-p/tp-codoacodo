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
            <img src="img/user.png" alt="user-account">
            <img src="img/shoppingcart.png" alt="shopping-cart">
        </nav>`;
       
let ftr = `<p>Mascotienda. mascotienda@gmail.com - cel: 1212-3131</p>
	<p>Webmaster: grupo incivil <b>"Las Huellas del Tigre"</b></p>
	<p>Ningún derecho reservado</p>`;
        
document.getElementsByTagName("header").item(0).innerHTML=hdr;
document.getElementsByTagName("footer").item(0).innerHTML=ftr;