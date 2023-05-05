# tp-codoacodo

## NORMAS INTERNAS

1. Cada uno trabaja sobre una rama
2. Cada imagen debe:
	
	a. guardarse en la carpeta img/
	
	b. El tamaño de la imagen debe ser cuadrada (preferiblemente de 300 x 300 px)
	
	c. Cada imagen lleva por nombre el mismo que el del producto (sin espacios)
	
3. Las categorías de animales son: gato, perro, otroAnimal (estos nombres se usan para los tags de cada producto)
4. Las categorías de productos son: alimento, salud, accesorio (estos nombres se usan para los tags de cada producto)
5. Se usa un tag novedad, destacado, regular, para cada producto que se desea que aparezca en dicha categoría.

## Estructura del .html
<body>
    <header></header> <!-- Lo llena el main.js -->
 <main class="container">
    <!-- Con dos div se establece el sistema de una columna angosta a la izquierda y otra más ancha a la derecha -->
     
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
2. Para los div usa el frameworck de las 12 columnas. Es responsive con 3 puntos de corte (Muy grande > 1300px > Grande > 900 > Tablet > 650 > Celular).
3. La "clase productos" es un contenedor de items de la "clase producto" (con formato de tarjeta)
4. La "clase novedades" es un contenedor de items de la "clase novedad" (con formato de tarjeta)
5. Tanto los productos como las novedades son containers de flexbox (display: flex)

## Estructura del main.js
1. Escribe el header y el footer
2. Escribe las tarjetas rellenando cada sección de acuerdo a su class
3. La estructura de cada tarjeta es la siguiente
		
		//<article class="producto"> <!-- ó <article class="novedad"> -->
			//<img src="${prod.foto}" alt="${prod.nombre}">
 	    	//<h3>${prod.nombre}</h3>
  	    	//<p>${prod.descripcion}</p>
  	    	//<h4>Precio: ${prod.precio}</h4>
      	//<button>Comprar</button>
  	 	//</article>
      
4. La información para cada tarjeta la toma de un archivo json llamado apiMascotienda.js

## Estructura de apiMascotienda.js
1. Tiene un array (llamado productos) que contiene objetos JSON con la siguiente estructura
		`{
		"nombre" : "Transportadora Hipster",
		"descripcion" : "Mantenga seguro a su perro cuando viaje",
		"foto" : "img/TransportadoraHipster.png",
		"precio" : 1200,
		"tags" : ["perro","accesorio","novedad"]
	},`
	
Observar que el nombre de la imagen debe iniciarse con el nombre de la carpeta img/.... y todas las imagenes deben ubicarse en dicha carpeta
	
## Productos en la api actualmente
	
		Perros		Gatos		Otros Animales
--------------+--------------+--------------+--------------+
Alimentos		4		4		4
--------------+--------------+--------------+--------------+
Accesorios		4		4		4
--------------+--------------+--------------+--------------+
Salud			4		4		4
--------------+--------------+--------------+--------------+
