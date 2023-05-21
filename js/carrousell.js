function crearCarrousell(slides) {

	const nextSlide = document.querySelector(".btn-next");

	nextSlide.addEventListener("click", function () {
	  for (j of slides) {
			j.style.zIndex = (parseInt(j.style.zIndex) + 1) % slides.length;
		}
	});

	const prevSlide = document.querySelector(".btn-prev");

	prevSlide.addEventListener("click", function () {
		for (j of slides) {
			j.style.zIndex = (parseInt(j.style.zIndex) + slides.length - 1) % slides.length;
		}
	});
}