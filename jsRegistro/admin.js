//const tablaUsuarios = document.querySelector('#tablaUsuarios');
const validarUsuario = document.querySelector('#validarUsuario');
const tablaUsuario = document.querySelector('#tablaUsuario');
const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
//const productosRegistrados = JSON.parse(localStorage.getItem('productos')) || [];
validarUsuario.addEventListener('submit', crearUsuario);

//creamos el molde para crear un objeto
class Usuario {
	constructor(id, mail, pass) {
		this.id = id;
		this.mail = mail;
		this.pass = pass;
	}
}


function crearUsuario(e) {
	e.preventDefault();
	const id = Date.now();
	const nombre = document.querySelector('#id').value;
	const precio = document.querySelector('#email').value;
	const descripcion = document.querySelector('#pass').value;

	//validar campos ACA
	//ustedes tienen que hacerlo el profe ya se los enseño

	const newProduct = new Usuario(id, mail, pass);
	usuariosRegistrados.push(newProduct);

	localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

	validarUsuario.reset();
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Usuario Registrado exitosamente',
		showConfirmButton: false,
		timer: 1500,
	});
	cargarUsuario();
}

function cargarUsuario() {
	tablaUsuario.innerHTML = '';

	usuariosRegistrados.map(function (usuario) {
		//creamos una etiqueta tr
		const tr = document.createElement('tr');
		//a esa etiqueta TR le implementamos los td con la informacion del usuario que se este iterando
		tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.mail}</td>
        <td>${usuario.pass}</td>        
        <td>
            <button class="btn btn-primary">Editar</button>
            <button class="btn btn-danger">Eliminar</button>
        </td>
        `;
		//incrustamos en el tbody el tr
		tablaUsuario.appendChild(tr);
	});
}

cargarUsuarios();