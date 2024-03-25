// Nav Funcionalidad para el boton que aparece en responsive
const toggle_Btn = document.querySelector('.toggle_btn');
const toggle_BtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

//Evento para el boton
toggle_Btn.addEventListener('click', bajar);

function bajar() {
	dropDownMenu.classList.toggle('open');
	const isOpen = dropDownMenu.classList.contains('open');

	toggle_BtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'; //Cambia el icono por una cruz al clickearlo
}

// Nav