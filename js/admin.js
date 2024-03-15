const tablaUsuarios = document.querySelector('#tablaUsuarios');
const validarProducto = document.querySelector('#validarProducto');
const tablaProducto = document.querySelector('#tablaProducto');
const formularioEditar = document.querySelector('#formularioEditar');
const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
let productosRegistrados = JSON.parse(localStorage.getItem('productos')) || [];
validarProducto.addEventListener('submit', crearProducto);
formularioEditar.addEventListener('submit', editarProducto);
//creamos el molde para crear un objeto
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
	usuariosRegistrados.map(function (usuario) {
		//creamos una etiqueta tr
		const tr = document.createElement('tr');
		//a esa etiqueta TR le implementamos los td con la informacion del usuario que se este iterando
		tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.nombre}</td>
        <td>${usuario.email}</td>
        `;
		//incrustamos en el tbody el tr
		tablaUsuarios.appendChild(tr);
	});
}

cargarUsuarios();

function crearProducto(e) {
	e.preventDefault();
	const id = Date.now();
	const nombre = document.querySelector('#nombre').value;
	const precio = document.querySelector('#precio').value;
	const descripcion = document.querySelector('#descripcion').value;
    const categoria = document.querySelector('#categoria').value;
    const stock = document.querySelector('#stock').value;

	//validar campos ACA
	//ustedes tienen que hacerlo el profe ya se los enseño

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
        <td>
            <button class="btn btn-primary" onclick="modalEditarProducto(${producto.id})">Editar</button>
            <button class="btn btn-danger" onclick="borrarProducto(${producto.id})">Eliminar</button>
        </td>
        `;
		//incrustamos en el tbody el tr
		tablaProducto.appendChild(tr);
	});
}

cargarProductos();

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

function editarProducto(e) {
	e.preventDefault();
	
	const nombreEditar = document.getElementById('nombreEditar').value;
	const precioEditar = document.getElementById('precioEditar').value;
	const descripcionEditar = document.getElementById('descripcionEditar').value;
	const categoriaEditar = document.getElementById('categoriaEditar').value;
	const stockEditar  = document.getElementById('stockEditar').value;

	// validaciones

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



