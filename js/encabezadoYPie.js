let hdr = `<h1>Mascotienda</h1>
        <div id="header-img">
        <img src="img/pet-shop.png" alt="logo-petshop">
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li class="dropdown">
                <a href="#">Mascotas</a>
                <ul>
                    <li><a href="perro.html">Perros</a></li>
                    <li><a href="gato.html">Gatos</a></li>
                    <li><a href="otroAnimal.html">Otras mascotas</a></li>
                </ul>
                </li>
                <li class="dropdown">
                <a href="#">Productos</a>
                <ul>
                    <li><a href="alimento.html">Alimentación</a></li>
                    <li><a href="accesorio.html">Accesorios</a></li>
                    <li><a href="salud.html">Salud</a></li>
                </ul>
                </li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
            
            <div id="nav-icons">
                <a href="registrousu.html"><i class="fa-regular fa-user" style="color: #000000; font-size: 18px; height: 18px; width: 18px;"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping" style="color: #000000; font-size: 18px; height: 18px; width: 18px;"></i></a>
                </div>
        </nav>

        `;
       
let ftr = `<footer>
<div class="container">
    <div class="col-4 col-m-4 col-s-12">
      <h3>Contacto</h3>
      <ul id="info">
        <li><i class="fa-solid fa-location-dot" style="color: #000000; font-size: 1.5em"></i>Alguna dirección 1570, Algún lugar, Argentina</li>
        <li><i class="fa-brands fa-whatsapp" style="color: #000000; font-size: 1.5em"></i>555-444-333 </li>
        <li><i class="fa-solid fa-envelope" style="color: #000000; font-size: 1.5em"></i>info@mascotienda.com</li>
      </ul>
    </div>
    <div class="col-4 col-m-4 col-s-12">
      <h3>Síguenos</h3>
      <ul class="social-media">
      <li><a href="#"><i class="fa-brands fa-facebook" style="color: #000000; font-size: 1.5em"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-twitter" style="color: #000000; font-size: 1.5em"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-instagram" style="color: #000000; font-size: 1.5em"></i></a></li>
      </ul>
    </div>
    <div class="col-4 col-m-4 col-s-12">
      <h3>Newsletter</h3>
      <form>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Ingresa tu email">
        </div>
        <button type="submit" class="btn btn-primary">Suscríbete</button>
      </form>
    </div>
  </div>
<div class="bottom-footer">
  <p>&copy; 2023 Mascotienda. Todos los derechos reservados.</p>
</div>
</footer>
`;
        
document.getElementsByTagName("header").item(0).innerHTML=hdr;
document.getElementsByTagName("footer").item(0).innerHTML=ftr;