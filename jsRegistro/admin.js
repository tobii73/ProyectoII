
// const validarUsuario = document.querySelector('#validarUsuario');
// const tablaUsuario = document.querySelector('#tablaUsuario');
// const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

// validarUsuario.addEventListener('submit', crearUsuario);


// class Usuario {
// 	constructor(id, mail, pass) {
// 		this.id = id;
// 		this.mail = mail;
// 		this.pass = pass;
// 	}
// }


// function crearUsuario(e) {
// 	e.preventDefault();
// 	const id = Date.now();
// 	const nombre = document.querySelector('#id').value;
// 	const precio = document.querySelector('#email').value;
// 	const descripcion = document.querySelector('#pass').value;

	

// 	const newProduct = new Usuario(id, mail, pass);
// 	usuariosRegistrados.push(newProduct);

// 	localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

// 	validarUsuario.reset();
// 	Swal.fire({
// 		position: 'center',
// 		icon: 'success',
// 		title: 'Usuario Registrado exitosamente',
// 		showConfirmButton: false,
// 		timer: 1500,
// 	});
// 	cargarUsuario();
// }

// function cargarUsuario() {
// 	tablaUsuario.innerHTML = '';

// 	usuariosRegistrados.map(function (usuario) {
		
// 		const tr = document.createElement('tr');
		
// 		tr.innerHTML = `
//         <td>${usuario.id}</td>
//         <td>${usuario.mail}</td>
//         <td>${usuario.pass}</td>        
//         <td>
//             <button class="btn btn-primary">Editar</button>
//             <button class="btn btn-danger">Eliminar</button>
//         </td>
//         `;
		
// 		tablaUsuario.appendChild(tr);
// 	});
// }

// cargarUsuarios();