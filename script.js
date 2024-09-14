function deslizarPagina() {
    const paginaInicio = document.getElementById('paginaInicio');

    // Añade la clase para deslizar la página hacia arriba
    paginaInicio.classList.add('deslizar-arriba');

    // Opcional: Si deseas ocultar completamente el contenido después de la animación,
    // puedes añadir un temporizador para eliminar el elemento después del deslizamiento
    // setTimeout(() => {
    //     paginaInicio.style.display = 'none'; // Oculta la página de inicio
    // }, 1000); // Tiempo de espera debe coincidir con la duración de la animación
}
