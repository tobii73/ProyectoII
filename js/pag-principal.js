// Nav Funcionalidad para el boton que aparece en responsive
const toggle_Btn = document.querySelector('.toggle_btn');
const toggle_BtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

//Evento para el boton
toggle_Btn.addEventListener('click', bajar);

function bajar() {
	dropDownMenu.classList.toggle('open');
	const isOpen = dropDownMenu.classList.contains('open');

	toggle_BtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'; //Cambia el icono por una cruz al clickearlo
}

// Nav

const logon = document.querySelector('.logon');
const logof = document.querySelector('.logof');
logon.addEventListener('click', redireccionar);
logof.addEventListener('click', redireccionar);

function redireccionar() {
	window.location.href = '/index.html'; //Dentro de los comillas ingresar el link a donde queremos redirecionar
}
