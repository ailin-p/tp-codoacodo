let hdr = `<h1>Mascotienda</h1>
        <div id="header-img">
        <img src="img/pet-shop.png" alt="logo-petshop">
        </div>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li class="dropdown">
                <a href="#">Mascotas</a>
                <ul>
                    <li><a href="#">Perros</a></li>
                    <li><a href="#">Gatos</a></li>
                    <li><a href="#">Otras mascotas</a></li>
                </ul>
                </li>
                <li class="dropdown">
                <a href="#">Productos</a>
                <ul>
                    <li><a href="#">Alimentación</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Salud</a></li>
                </ul>
                </li>
                <li><a href="#">Contacto</a></li>
            </ul>
            
            <div id="nav-icons">
                <a href="#"><i class="fa-regular fa-user" style="color: #000000; font-size: 18px; height: 18px; width: 18px;"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping" style="color: #000000; font-size: 18px; height: 18px; width: 18px;"></i></a>
            </div>
        </nav>

        `;
       
let ftr = `<div id="social-icons">
            <a href="#"><i class="fa-brands fa-instagram" style="color: #000000; font-size: 30px; height: 30px; width: 30px;"></i></a>
            <a href="#"><i class="fa-brands fa-facebook" style="color: #000000; font-size: 30px; height: 30px; width: 30px;"></i></a>
            </div>
            <p>MASCOTIENDA</p>`;
        
document.getElementsByTagName("header").item(0).innerHTML=hdr;
document.getElementsByTagName("footer").item(0).innerHTML=ftr;