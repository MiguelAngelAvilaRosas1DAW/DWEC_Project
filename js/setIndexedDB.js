"use strict";

async function setIndexedDB(nombre, value) {
    await openDatabase();
    const transaction = db.transaction(['LoginStore'], 'readwrite');
    const almacen = transaction.objectStore('LoginStore');
    const request = almacen.put({ name: nombre, value: encodeURIComponent(value || "") });

    request.onsuccess = function() {
        console.log(`IndexedDB: Guardado ${nombre}=${encodeURIComponent(value || "")}`);
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al guardar el dato', event);
    };
}
