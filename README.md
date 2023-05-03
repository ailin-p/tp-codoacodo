# tp-codoacodo

## NORMAS INTERNAS

1. Cada uno trabaja sobre una rama

## Estructura del .html
<body>
    <header></header> <!-- Lo llena el main.js -->
 <main class="container">
    <!-- Con dos div se estableceel sistema de una columna angosta a la izquierda y otra más ancha a la derecha -->
     
    <div class="col-3 col-m-5 col-s-6">
    <h2>Últimas novedades</h2>
      <section class="novedades"> <!-- A cada sección las llena el main.js -->
      </section>
      </div>
      
     <div class="col-9 col-m-7 col-s-6">  
     <h2>Productos destacados</h2>
      <section class="productos">
       </section>
     </div>     
 </main>
    <footer></footer> <!-- Lo llena el main.js -->
</body>

## Estructura del .css
1. Se define un container grid.
2. Para los <div> usa el frameworck de las 12 columnas.
3. la "clase productos" es un contenedor de items de la "clase producto" (con formato de tarjeta)
4. la "clase novedades" es un contenedor de items de la "clase novedad" (con formato de tarjeta)

## Estructura del main.js
1. Escribe el <header> y el <footer>
2. Escribe las tarjetas rellenando cada sección de acuerdo a su class
3. La estructura de cada tarjeta es la siguiente
		<article class="producto"> <!-- ó <article class="novedad"> -->
			<img src="${prod.foto}" alt="${prod.nombre}">
         <h3>${prod.nombre}</h3>
         <p>${prod.descripcion}</p>
         <h4>Precio: ${prod.precio}</h4>
         <button>Comprar</button>
      </article>
4. La información para cada tarjeta la toma de un archivo json llamado apiMascotienda.js
