'use strict';

navbar_functions("../../");

let datosAcceso = [];

if (navigator.cookieEnabled == true) {
    const nombre = document.getElementById("nombre");
    const valor = document.getElementById("valor");

    const grabar = document.getElementById("guardar");
    const cargar = document.getElementById("cargarApi");
    const cargar5 = document.getElementById("cargarApi5");

    mostrarDatos();
    grabar.addEventListener("click", async function (evento) {
        await grabarDato(nombre.value, valor.value, "", "cookie");
    });
    cargar.addEventListener("click", async function (evento) {
        await cargarDatos("cookie");
    });
    cargar5.addEventListener("click", async function (evento) {
        for (let index = 0; index < 5; index++) {
            await cargarDatos("cookie");
        }
    });

} else {
    alert("El uso de cookies está desactivado");
}
