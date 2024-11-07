'use strict';

navbar_functions("../../");

let datosAcceso = []; // 'array' dónde almaceno los valos de nombre y clave

if (navigator.cookieEnabled == true) { // comprueba que el navegador sea compatible
    const nombre = document.getElementById("nombre"); // accedo al valor del input para el nombre
    const valor = document.getElementById("valor"); // accedo al valor del input para la clave

    const grabar = document.getElementById("guardar");
    const cargar = document.getElementById("cargarApi");
    const cargar5 = document.getElementById("cargarApi5");

    mostrarDatos(); // muestro el contenido de las 'cookies'
    grabar.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        await grabarDato(nombre.value, valor.value, "cookie"); // grabo una 'cookie'
    });
    cargar.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        await cargarDatos("cookie"); // cargo una API
    });
    cargar5.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        for (let index = 0; index < 5; index++) {
            await cargarDatos("cookie"); // cargo una API
        }
    });

} else {
    alert("El uso de cookies está desactivado");
}
