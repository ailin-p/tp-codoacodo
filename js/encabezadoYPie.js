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
                <a href="registrousu.html"><i class="fi fi-rr-user" style="color: #000000; font-size: 1.3em; margin: 15px;"></i></a>

                      <div class="cart">
                                <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 25 25"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="icon-cart"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>

                      </div>
                <!--</div>-->
                <div class="carrito">
                        
                <div class="itemFila">
                <ul>
                 <div class="cuerpoCarro"> 
                 </div>
                </ul items-list> 
                </div>
              
              <p class="total ">Total $</p>
              
              </div>    

            </div>

        </nav>

        `;

let ftr = `
<div class="container-footer">
    <div class="col-4 col-m-4 col-s-12">
      <h3>Contacto</h3>
      <ul id="info">
        <li><i class="fi fi-rs-marker" style="color: #000000; font-size: 1.5em"></i>Alguna dirección 1570, Algún lugar, Argentina</li>
        <li><i class="fi fi-brands-whatsapp" style="color: #000000; font-size: 1.5em"></i>555-444-333 </li>
        <li><i class="fi fi-rr-envelope" style="color: #000000; font-size: 1.5em"></i>info@mascotienda.com</li>
      </ul>
    </div>
    <div class="col-4 col-m-4 col-s-12">
      <h3>Síguenos</h3>
      <ul class="social-media">
      <li><a href="#"><i class="fi fi-brands-facebook" style="color: #000000; font-size: 1.5em"></i></a></li>
        <li><a href="#"><i class="fi fi-brands-twitter" style="color: #000000; font-size: 1.5em"></i></a></li>
        <li><a href="#"><i class="fi fi-brands-instagram" style="color: #000000; font-size: 1.5em"></i></a></li>
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
`;

document.getElementsByTagName("header").item(0).innerHTML = hdr;
document.getElementsByTagName("footer").item(0).innerHTML = ftr;