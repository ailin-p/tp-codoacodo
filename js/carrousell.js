async function crearCarrousell(slides) {

	const nextSlide = document.querySelector(".btn-next");

	nextSlide.addEventListener("click", function () {
	  for (j of slides) {
			j.style.zIndex = (parseInt(j.style.zIndex) + 1) % 4;
		}
	});

	const prevSlide = document.querySelector(".btn-prev");

	prevSlide.addEventListener("click", function () {
		for (j of slides) {
			j.style.zIndex = (parseInt(j.style.zIndex) + 3) % 4;
		}
	});
}