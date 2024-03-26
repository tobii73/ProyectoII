const darkModeToggle = document.getElementById('dark-mode-toggle');
let productosRegistrados = JSON.parse(localStorage.getItem('productos')) || [];
const body = document.body;


function mostrarProducto() {
	productosRegistrados.map(function(producto) {
		const card = document.getElementById('bolsos');

		card.innerHTML = `
		<p>${producto.nombre}</p>
		<p>${producto.precio}</p>
		`
	})
}


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

const opciones = ['Bolsos', 'Mochilas Casuales', 'Mochilas de Trekking'];
let mouseSobreSugerencias = false;

document.getElementById('inputBuscar').addEventListener('input', function () {
	const busqueda = this.value.toLowerCase();
	const sugerencias = opciones.filter((opcion) =>
		opcion.toLowerCase().startsWith(busqueda)
	);
	mostrarSugerencias(sugerencias);
});

document.getElementById('botonBuscar').addEventListener('click', function () {
	const busqueda = document.getElementById('inputBuscar').value.toLowerCase();
	redirigir(busqueda);
});

document.getElementById('sugerencias').addEventListener('mouseenter', function () {
	mouseSobreSugerencias = true;
});

document.getElementById('sugerencias').addEventListener('mouseleave', function () {
	mouseSobreSugerencias = false;
	ocultarSugerencias();
});

function mostrarSugerencias(sugerencias) {
	const sugerenciasContainer = document.getElementById('sugerencias');
	sugerenciasContainer.innerHTML = '';
	sugerencias.forEach((sugerencia) => {
		const sugerenciaElemento = document.createElement('div');
		sugerenciaElemento.textContent = sugerencia;
		sugerenciaElemento.addEventListener('click', function () {
			document.getElementById('inputBuscar').value = sugerencia;
			sugerenciasContainer.innerHTML = '';
			redirigir(sugerencia.toLowerCase());
		});
		sugerenciasContainer.appendChild(sugerenciaElemento);
	});
	sugerenciasContainer.style.display =
		sugerencias.length > 0 &&
		document.getElementById('inputBuscar').value.trim().length > 0
			? 'block'
			: 'none';
}

function ocultarSugerencias() {
	const sugerenciasContainer = document.getElementById('sugerencias');
	if (!mouseSobreSugerencias) {
		sugerenciasContainer.style.display = 'none';
	}
}

function redirigir(busqueda) {
	switch (busqueda) {
		case 'bolsos':
			window.location.href = '/pages/bolsos.html';
			break;
		case 'mochilas casuales':
			window.location.href = '/pages/mochilasCas.html';
			break;
		case 'mochilas de trekking':
			window.location.href = '/pages/mochilaTrekking.html';
			break;
		default:
			Swal.fire({
				title: 'Producto no encontrado',
				text: 'Por favor, intentalo de nuevo',
				icon: 'question',
			});
	}
}

document.getElementById('enviarBtn').addEventListener('click', function (event) {
	event.preventDefault(); // Evita que el formulario se envíe automáticamente

	const nombreC = document.querySelector('#nombreCompletoC').value.trim();
	const emailC = document.querySelector('#emailC').value.trim();
	const mensajeC = document.querySelector('#mensajeC').value.trim();

	// Validaciones básicas
	if (nombreC.length === 0 || emailC.length === 0 || mensajeC.length === 0) {
		Swal.fire({
			icon: 'error',
			title: 'Verifique los campos',
			text: 'Todos los campos son obligatorios',
		});
		return;
	} else if (nombreC.length < 2 || nombreC.length > 20) {
		Swal.fire({
			icon: 'error',
			title: 'Verifique su nombre',
			text: 'Ingrese su nombre completo',
		});
		return;
	}

	// Expresión regular para validar correo electrónico
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(emailC)) {
		Swal.fire({
			icon: 'error',
			title: 'Verifique su mail',
			text: 'Ingrese su mail correctamente',
		});
		return;
	}

	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Su mensaje fue enviado con éxito',
		showConfirmButton: false,
		timer: 1500,
	});
});
