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
        grabarDato(nombre.value, valor.value, "", "localStorage");
    });

    cargar.addEventListener("click", async function (evento) {
        await cargarDatos("localStorage");
    });
    cargar5.addEventListener("click", async function (evento) {
        for (let index = 0; index < 5; index++) {
            await cargarDatos("localStorage");
        }
    });
} else {
    alert("El navegador no soporta localStorage");
}

