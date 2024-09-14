function mostrarImagen() {
    const paginaInicio = document.getElementById('paginaInicio');
    const contenidoFinal = document.getElementById('contenidoFinal');

    // Añade la clase para deslizar la página hacia arriba
    paginaInicio.classList.add('deslizar-arriba');

    // Espera a que termine la animación antes de mostrar el contenido final
    setTimeout(() => {
        paginaInicio.style.display = 'none'; // Oculta la página de inicio
        contenidoFinal.style.display = 'flex'; // Muestra el contenido final
    }, 1000); // Tiempo de espera debe coincidir con la duración de la animación
}
