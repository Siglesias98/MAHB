function deslizarPagina() {
    const paginaInicio = document.getElementById('paginaInicio');
    const imagenContainer = document.getElementById('imagenContainer');

    // Añade la clase para deslizar la página hacia arriba
    paginaInicio.classList.add('deslizar-arriba');

    // Espera a que termine la animación antes de mostrar la imagen
    setTimeout(() => {
        paginaInicio.style.display = 'none'; // Oculta la página de inicio
        imagenContainer.style.display = 'flex'; // Muestra el contenedor de la imagen
    }, 1000); // Tiempo de espera debe coincidir con la duración de la animación
}
