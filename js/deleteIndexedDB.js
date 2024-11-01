"use strict";

async function deleteIndexedDB(name) {
    await openDatabase();
    const transaction = db.transaction(['LoginStore'], 'readwrite');
    const almacen = transaction.objectStore('LoginStore');
    const request = almacen.delete(name);

    request.onsuccess = function() {
        console.log(`IndexedDB: Eliminada la clave ${name}`);
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al eliminar el dato', event);
    };
}
