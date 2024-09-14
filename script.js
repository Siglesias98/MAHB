/* Estilo global */
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #000; /* Fondo negro */
    color: #fff; /* Texto blanco para contraste */
    overflow: hidden; /* Evita barras de desplazamiento */
    height: 100vh;
}

/* Estilo para la página de inicio */
.pagina-inicio {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Ocupa toda la altura de la ventana */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 1s ease, opacity 1s ease; /* Transición para deslizamiento */
}

/* Estilo para el título */
#titulo {
    font-size: 3em;
    color: #FFFF00; /* Color amarillo neón */
    text-shadow: 0 0 10px #FFFF00; /* Efecto de resplandor */
    margin-bottom: 20px; /* Espacio entre el título y el botón */
}

/* Estilo para el botón */
.boton {
    background-color: #FFFF00; /* Color amarillo */
    border: none;
    color: #000; /* Texto negro para contraste */
    padding: 15px 25px;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.boton:hover {
    background-color: #f2f200; /* Color amarillo más claro al pasar el ratón */
}

/* Estilo para el contenedor de la imagen */
.imagen-container {
    display: none; /* Oculta el contenedor de la imagen por defecto */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Estilo para la imagen floral */
#imagenFloral {
    width: 80%; /* Ajusta el tamaño según sea necesario */
    max-width: 600px; /* Limita el tamaño máximo */
}

/* Animación de deslizamiento */
.deslizar-arriba {
    transform: translateY(-100vh); /* Desliza hacia arriba */
    opacity: 0; /* Oculta el contenido */
}
