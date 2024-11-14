'use strict';

async function grabarDato(name, value, extraValue, tipo) {
    console.log("Grabando dato...");
    switch (tipo) {
        case "cookie":
            let caducidadCookie = 1 * 60 * 1000;

            let theDate = new Date();
            let currentMiliseconds = theDate.getTime();
            let expirationMiliseconds = currentMiliseconds + caducidadCookie;
            theDate.setTime(expirationMiliseconds);
            console.log(`Fecha caducidad: ${theDate}`);

            document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure";
            mostrarDatos("cookie");
            break;

        case "localStorage":
            datosAcceso.push({
                nombre: name,
                valor: value
            });

            localStorage.setItem("localAcceso", JSON.stringify(datosAcceso));
            mostrarDatos("localStorage");
            break;

        case "indexedDb":

            solicitudDB = indexedDB.open(nombreBD, versionBD);
            solicitudDB.onerror = function (event) {
                console.error(`IndexedDB error: ${event.target.errorCode}`);
            };
            solicitudDB.onsuccess = function (event) {
                bd = event.target.result;
                canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
                canalBD.put({ nombre: name, edad: value, extra:extraValue });
                mostrarDatos("indexedDb");
            };
            break;

    }
}