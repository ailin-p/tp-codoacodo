const keyPetFinder = "7XHKnplqSySRoji29GpljAZLK3pJECAdPR24YiMxx15GsHnuYg";
const secretPetFinder = "f6agyZmIenbC00pA4d99v5zizvOwFbD89wPx7RaP";
var animales = [];
var slides = [];

var pf = new petfinder.Client({apiKey: keyPetFinder, secret: secretPetFinder});

let promesa1 = pf.animal.search()
	 .then(function (response) {
        return response.data.animals
    })
    .catch(function (error) {
        console.log("Error")
    });

promesa1.then((value) => {
 	animales = value;
 	let i = 0;
 	while (i <= 4) {
  		const unaDiapo = document.createElement("div");
		unaDiapo.className = "slide";
		unaDiapo.style.zIndex = 3 - i;
		const unaFoto = document.createElement("img")
		if (value[i].photos.length != 0) {
			unaFoto.src = value[i].photos[0].medium;
			unaFoto.alt = value[i].description;
			i++;
		};
		unaDiapo.appendChild(unaFoto);
		const unNombre = document.createElement("h3");
		unNombre.innerHTML = value[i].name;
		unaDiapo.appendChild(unNombre);
		const unaEspecie = document.createElement("p");
		unaEspecie.innerHTML = value[i].species;
		unaDiapo.appendChild(unaEspecie);
		const unSexo = document.createElement("p");
		unSexo.innerHTML = value[i].gender;
		unaDiapo.appendChild(unSexo);
		const unTamanio = document.createElement("p");
		unTamanio.innerHTML = value[i].size;
		unaDiapo.appendChild(unTamanio);
		const unContacto = document.createElement("h4");
		unContacto.innerHTML = value[i].contact.email;
		unaDiapo.appendChild(unContacto);
		document.getElementsByClassName("slider")[0].appendChild(unaDiapo);
		slides.push(unaDiapo);
  }
	console.log(slides);
	const btnNext = document.createElement("button");
		btnNext.innerHTML = ">";
		btnNext.className = "btn btn-next";		
	document.getElementsByClassName("slider")[0].appendChild(btnNext);
	const btnPrev = document.createElement("button");
		btnPrev.innerHTML = "<";
		btnPrev.className = "btn btn-prev";		
	document.getElementsByClassName("slider")[0].appendChild(btnPrev);
	crearCarrousell(slides);	
})

