const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
});

$(document).ready(function () {
	$('[data-fancybox="gallery"]').fancybox({
		loop: true,
		buttons: ['slideShow', 'thumbs', 'close'],
	});
});

$(document).ready(function () {
	$('.product-gallery').each(function () {
		$(this)
			.find('a')
			.attr('data-fancybox', 'catalog')
			.fancybox({
				loop: true,
				buttons: ['slideShow', 'fullScreen', 'thumbs', 'close'],
			});
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const inputBuscar = document.getElementById('inputBuscar');
	const btnBuscar = document.getElementById('btnBuscar');

	btnBuscar.addEventListener('click', function () {
		buscar();
	});

	inputBuscar.addEventListener('keypress', function (e) {
		if (e.key === 'Enter') {
			buscar();
		}
	});

	function buscar() {
		const textoBusqueda = inputBuscar.value.trim().toLowerCase();

		// Verificar si el texto de búsqueda coincide con alguna de tus categorías o productos
		if (
			textoBusqueda === 'Mochilas casuales' ||
			textoBusqueda === 'Bolsos' ||
			textoBusqueda === 'Mochilas de trekking'
		) {
			// Redirigir a la página correspondiente a la categoría
			window.location.href = `/pages/mochilasCas.html${textoBusqueda}.html`;
		} else if (
			textoBusqueda === 'producto1' ||
			textoBusqueda === 'producto2' ||
			textoBusqueda === 'producto3'
		) {
			// Redirigir a la página correspondiente al producto
			window.location.href = `/pagina_de_${textoBusqueda}.html`;
		} else {
			// Texto de búsqueda no reconocido
			alert('No se encontró la categoría o producto buscado.');
		}
	}
});
