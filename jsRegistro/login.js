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
	let usuarioAdmin = false;
    let loginSuccess = false;

	//validaciones aca
	if (!resultadoValidacion) {
		console.log('Lo siento! no es un mail valido');
	} //sigan con todas las que faltan

	//una vez pasada las validaciones
	const usuarioVerificado = usuariosRegistrados.find(function (usuario) {
		// usuario.admin = true;
		usuarioAdmin = usuario.admin;
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
	else {
		
		loginSuccess = true;
	}
	
	if (loginSuccess) {
		// Redirigir al usuario a index.html
		
		if (!usuarioAdmin) { window.location.href = "../index.html"; /* AQUI DEBEN PONER EL NOMBRE DE LA PAGINA PARA LA COMPRA DE PRODUCTOS*/ */
		}		
		else{ { window.location.href = "https://gmail.com"; /*AQUI VA LA PAGINA DE ADMINISTRACION*/ */
		}
	} 
	validarLogin.reset();


}
}
