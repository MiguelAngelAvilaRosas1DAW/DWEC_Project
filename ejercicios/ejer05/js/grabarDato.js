'use strict';

async function grabarDato(name, value, tipo) {
    console.log("Grabando dato...");
    switch (tipo) {
        case "cookie":
            let caducidadCookie = 1 * 60 * 1000; // caducidad por defecto, 1 minutos

            let theDate = new Date(); // obtengo la fecha actual
            let currentMiliseconds = theDate.getTime(); // obtengo la fecha actual en milisegundos
            let expirationMiliseconds = currentMiliseconds + caducidadCookie; // añado la caducidad en milisegundos
            theDate.setTime(expirationMiliseconds); // actualizo la fecha (ahora con el incremento de la caducidad)
            console.log(`Fecha caducidad: ${theDate}`);

            // creo la 'cookie' con los atributos correspondientes
            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure";
            mostrarDatos("cookie");
            break;

        case "localStorage":
            datosAcceso.push({
                nombre: name,
                valor: value
            }); // introduzco los datos: nombre y clave, en el 'array'

            // guardo los datos del 'array' convirtiendolos en JSON en una variable localStorage llamada 'acceso'
            localStorage.setItem("localAcceso", JSON.stringify(datosAcceso));
            mostrarDatos("localStorage");
            break;

        case "indexedDb":

            // Abre la base de datos IndexedDB
            solicitudDB = indexedDB.open(nombreBD, versionBD);
            solicitudDB.onerror = function (event) {
                console.error(`IndexedDB error: ${event.target.errorCode}`);
            };
            solicitudDB.onsuccess = function (event) {
                bd = event.target.result;
                canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
                canalBD.put({ nombre: name, edad: value }); // Almacena los valores obtenidos de los campos de entrada
                mostrarDatos("indexedDb");
            };
            break;

    }
}