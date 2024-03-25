const tablaUsuarios = document.querySelector('#tablaUsuarios');
const validarProducto = document.querySelector('#validarProducto');
const tablaProducto = document.querySelector('#tablaProducto');
const formularioEditar = document.querySelector('#formularioEditar');
const modalEditar = document.getElementById('productoEditar');
const cerrar = document.getElementById('cerrar');
const precio = document.getElementById('precio');
let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
let productosRegistrados = JSON.parse(localStorage.getItem('productos')) || [];
validarProducto.addEventListener('submit', crearProducto);
formularioEditar.addEventListener('submit', editarProducto);
cerrar.addEventListener('click', cerrarModal);


cargarProductos();


function limitarCaracteres(input) {
    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
}


class Producto {
	constructor(id, nombre, precio, descripcion, categoria, stock) {
		this.id = id;
		this.nombre = nombre;
		this.precio = precio;
		this.descripcion = descripcion;
        this.categoria = categoria;
        this.stock = stock;
	}
}


function cargarUsuarios() {
	usuariosRegistrados.map(function(usuario) {
		//creamos una etiqueta tr
		const tr = document.createElement('tr'); 
		tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.name}</td>
        <td>${usuario.email}</td>
		<td>
			<button class="btn btn-success mx-3" onclick="validar(${usuario.id})">Validar</button>
			<button class="btn btn-secondary" onclick="invalidar(${usuario.id})">Invalidar</button>
		</td>
        `;
		//incrustamos en el tbody el tr
		tablaUsuarios.appendChild(tr);
	});
	
}

cargarUsuarios();

function validar(id) {
	

	usuariosRegistrados = usuariosRegistrados.filter(function(usuario){
		if (usuario.id === id) {	
			usuario.admin = true;
			localStorage.setItem('usuarios' , JSON.stringify(usuariosRegistrados));
			
		}
	});

	
}

function invalidar(id) {
	usuariosRegistrados = usuariosRegistrados.filter(function(usuario){
		if (usuario.id === id) {	
			usuario.admin = false;
			localStorage.setItem('usuarios' , JSON.stringify(usuariosRegistrados));
			
		}
	});
}



function crearProducto(e) {
	e.preventDefault();
	const id = Date.now();
	const nombre = document.querySelector('#nombre').value.trim();
	const precio = document.querySelector('#precio').value.trim();
	const descripcion = document.querySelector('#descripcion').value.trim();
    const categoria = document.querySelector('#categoria').value.trim();
    const stock = document.querySelector('#stock').value.trim();

	const error = document.getElementById('error');
	if (nombre.length === 0 || precio.length === 0 || descripcion.length === 0 || categoria.length === 0 || stock.length === 0){
		
		error.innerHTML = 'todos los campos deben estar completos';
		setTimeout( () => {
			error.textContent = '';
		}, 2000);
		return false;
	} else if (precio < 0 || stock < 0){
		error.innerHTML = 'ingresar un numero positivo';
		setTimeout( () => {
			error.textContent = '';
		}, 2000);
		return false; 
	}
	const newProduct = new Producto(id, nombre, precio, descripcion, categoria, stock);
	productosRegistrados.push(newProduct);

	localStorage.setItem('productos', JSON.stringify(productosRegistrados));

	validarProducto.reset();
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Producto Agregado Exitosamente',
		showConfirmButton: false,
		timer: 1500,
	});
	cargarProductos();
}

function cargarProductos() {
	tablaProducto.innerHTML = '';

	productosRegistrados.map(function (producto) {
		//creamos una etiqueta tr
		const tr = document.createElement('tr');
		//a esa etiqueta TR le implementamos los td con la informacion del usuario que se este iterando
		tr.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.descripcion}</td>
        <td>${producto.categoria}</td>
        <td>${producto.stock}</td>
        <td class="text-center">
            <button class="btn btn-primary mx-3 my-3" onclick="modalEditarProducto(${producto.id})">Editar</button>
            <button class="btn btn-danger" onclick="borrarProducto(${producto.id})">Eliminar</button>
        </td>
        `;
		//incrustamos en el tbody el tr
		tablaProducto.appendChild(tr);
	});
}



function borrarProducto(id) {
	productosRegistrados = productosRegistrados.filter( function(producto){
	 	return	producto.id !== id;
	});


	localStorage.setItem('productos' , JSON.stringify(productosRegistrados));

	cargarProductos();

}


function modalEditarProducto(id) {
	let producto = productosRegistrados.find(function(producto){
		return producto.id == id;
	})

	document.querySelector('#nombreEditar').value = producto.nombre;
	document.querySelector('#precioEditar').value = producto.precio;
	document.querySelector('#categoriaEditar').value = producto.categoria;
	document.querySelector('#descripcionEditar').value = producto.descripcion;
	document.querySelector('#stockEditar').value = producto.stock;

	formularioEditar.setAttribute('data-id', id);

	document.querySelector('#productoEditar').style.display = 'block';
	
}

function cerrarModal() {
	modalEditar.style.display = 'none';
}

function editarProducto(e) {
	e.preventDefault();
	
	const nombreEditar = document.getElementById('nombreEditar').value;
	const precioEditar = document.getElementById('precioEditar').value;
	const descripcionEditar = document.getElementById('descripcionEditar').value;
	const categoriaEditar = document.getElementById('categoriaEditar').value;
	const stockEditar  = document.getElementById('stockEditar').value;

	// validaciones
	const errorEditar = document.getElementById('errorEditar');
	if (nombreEditar.length === 0 || precioEditar.length === 0 || descripcionEditar.length === 0 || categoriaEditar.length === 0 || stockEditar.length === 0){
		
		errorEditar.innerHTML = 'todos los campos deben estar completos';
		setTimeout( () => {
			errorEditar.textContent = '';
		}, 2000);
		return false;
	} else if (precioEditar < 0 || stockEditar < 0){
		errorEditar.innerHTML = 'ingresar un numero positivo';
		setTimeout( () => {
			errorEditar.textContent = '';
		}, 2000);
		return false; 
	}

	const id = formularioEditar.getAttribute('data-id');
	
	const productoIndex = productosRegistrados.findIndex(function(producto){
		return producto.id == parseInt(id);	
	})
		productosRegistrados[productoIndex].nombre = nombreEditar;
		productosRegistrados[productoIndex].precio = precioEditar;
		productosRegistrados[productoIndex].descripcion = descripcionEditar;
		productosRegistrados[productoIndex].categoria = categoriaEditar;
		productosRegistrados[productoIndex].stock = stockEditar;

		document.querySelector('#productoEditar').style.display = 'none';

		cargarProductos();
		localStorage.setItem('productos' , JSON.stringify(productosRegistrados));
}


