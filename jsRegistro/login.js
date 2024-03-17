const validarLogin = document.querySelector('#validarLogin');

validarLogin.addEventListener('submit', loginUsuario);

//esta variable almacena la lista de todos los usuarios registrado
const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

function loginUsuario(e) {
	e.preventDefault();
	//estas variables almacenan el valor de los input al ejecutarse el submit
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	//expresion regular para validar email
	const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const resultadoValidacion = validarEmail.test(email);

	//validaciones aca
	if (!resultadoValidacion) {
		console.log('Lo siento! no es un mail valido');
	} //sigan con todas las que faltan

	//una vez pasada las validaciones
	const usuarioVerificado = usuariosRegistrados.find(function (usuario) {
		return usuario.email === email;
	});

	if (usuarioVerificado == undefined || usuarioVerificado.password !== password) {
		Swal.fire({
			icon: 'error',
			title: 'Lo siento !',
			text: 'El Email o contraseña es incorrecto!',
			confirmButtonColor: 'orange',
		});
		return;
	}

	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Usuario Logueado Correctamente',
		showConfirmButton: false,
		timer: 1500,
		confirmButtonColor: 'orange',
	});

	validarRegistro.reset();
}
