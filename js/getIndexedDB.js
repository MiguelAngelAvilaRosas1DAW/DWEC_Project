"use strict";
async function getIndexedDB(name) {
    await openDatabase();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['LoginStore'], 'readonly');
        const store = transaction.objectStore('LoginStore');
        const request = store.get(name);
        request.onsuccess = function (event) {
            if (request.result) {
                const value = decodeURIComponent(request.result.value);
                console.log(`IndexedDB: Recuperado ${name}=${value}`);
                resolve(value);
            } else {
                console.log(`IndexedDB: No se encontró el valor para ${name}`);
                resolve(null);
            }
        };

        request.onerror = function (event) {
            console.error('IndexedDB: Error al obtener el dato', event);
            reject(event);
        };
    });
}