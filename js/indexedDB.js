"use strict";

let db;
async function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('LoginDB', 1);
        request.onerror = function (event) {
            console.error('IndexedDB: Error al abrir la base de datos', event);
            reject(event);
        };
        request.onsuccess = function (event) {
            db = event.target.result;
            console.log('IndexedDB: Base de datos abierta exitosamente');
            resolve(db);
        };

        request.onupgradeneeded = function (event) {
            db = event.target.result;
            if (!db.objectStoreNames.contains('LoginStore')) {
                db.createObjectStore('LoginStore', { keyPath: 'name' });
                console.log('IndexedDB: Almacén creado');
            }
        };
    });
}