'use strict';

function borrarDato(nombre, tipo) {

    console.log("Borrando dato...");
    switch (tipo) {
        case "cookie":
            let caducidadCookie = 1 * 60 * 1000;

            let theDate = new Date();
            let currentMiliseconds = theDate.getTime();
            let expirationMiliseconds = currentMiliseconds - caducidadCookie;
            theDate.setTime(expirationMiliseconds);
            console.log(`Fecha caducidad: ${theDate}`);

            document.cookie = nombre + "=;expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure";

            mostrarDatos("cookie");
            break;

        case "localStorage":
            let newDatosAcceso = [];
            let cont = 0;

            datosAcceso = JSON.parse(localStorage.getItem("localAcceso"));
            for (let i = 0; i < datosAcceso.length; i++) {
                if (!(datosAcceso[i].nombre == nombre)) {
                    newDatosAcceso[cont] = datosAcceso[i];
                    cont++;
                }
            }
            datosAcceso = [...newDatosAcceso];
            localStorage.setItem("localAcceso", JSON.stringify(datosAcceso));
            break;

        case "indexedDb":
            solicitudDB = indexedDB.open(nombreBD, versionBD);
            solicitudDB.onerror = function (event) {
                console.error(`IndexedDB error: ${event.target.errorCode}`);
            };
            solicitudDB.onsuccess = function (event) {
                bd = event.target.result;
                canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
                canalBD.delete(nombre);
            };
            mostrarDatos("indexedDb");
            break;
    }


}