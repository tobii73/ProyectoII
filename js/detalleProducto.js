// JavaScript para agregar un evento click al botón y mostrar la alerta con Swal.fire
document.getElementById('botonAgregar').addEventListener('click', function() {
    // Mostrar la alerta con Swal.fire
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto añadido al carrito",
        showConfirmButton: false,
        timer: 1500
    });
});
