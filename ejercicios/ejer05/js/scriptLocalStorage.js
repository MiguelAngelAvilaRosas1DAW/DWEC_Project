'use strict';

navbar_functions("../../");

let datosAcceso = [];

if (window.localStorage) {
    const nombre = document.getElementById("nombre");
    const valor = document.getElementById("valor");
    const guardar = document.getElementById("guardar");
    const cargar = document.getElementById("cargarApi");
    const cargar5 = document.getElementById("cargarApi5");

    guardar.addEventListener("click", function () {
        grabarDato(nombre.value, valor.value, "localStorage");
    });

    cargar.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        await cargarDatos("localStorage"); // cargo una API
    });
    cargar5.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
        for (let index = 0; index < 5; index++) {
            await cargarDatos("localStorage"); // cargo una API
        }
    });
} else {
    alert("El navegador no soporta localStorage");
}

