document.getElementById('formulario').addEventListener('submit', function(event) {
    // Validación extra para el campo de nombre (que no contenga números)
    const nombre = document.getElementById('nombre').value;
    const nombreRegex = /^[a-zA-Z\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        event.preventDefault(); // Evita que el formulario se envíe
    }

    // Validación para la fecha de nacimiento (que esté en el pasado)
    const fechaNacimiento = new Date(document.getElementById('fecha-nacimiento').value);
    const fechaActual = new Date();
    if (fechaNacimiento >= fechaActual) {
        alert("La fecha de nacimiento debe ser una fecha pasada.");
        event.preventDefault(); // Evita que el formulario se envíe
    }
});
