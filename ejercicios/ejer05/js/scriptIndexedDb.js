'use strict';

navbar_functions("../../");

let datos = [];
let solicitudDB,
    bd,
    canalBD;
let nombreBD = "DATOS";
let versionBD = 1;
let tablaBD = "datos";
solicitudDB = indexedDB.open(nombreBD, versionBD); 
solicitudDB.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`); 
};
solicitudDB.onsuccess = function (event) { 
    console.info('Conexión satisfactoria'); 
    bd = event.target.result; 
};
solicitudDB.onupgradeneeded = function (event) { 
    console.info('Base de datos creada'); 
    bd = event.target.result; 
    let registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true }); 
    registros.createIndex("nombre", "nombre", { unique: false }); // CREAMOS UN CAMPO 'nombre'
    registros.createIndex("edad", "edad", { unique: false }); // CREAMOS UN CAMPO 'clave'

    registros.oncompleted = function (event) {
        console.info('Almacen de datos creado');
    }
};

mostrarDatos("indexedDb"); // MUESTRO LOS DATOS
// DATOS
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
// GUARDAR
const guardar = document.getElementById("guardar");
const cargar = document.getElementById("cargarApi");
const cargar5 = document.getElementById("cargarApi5");

guardar.addEventListener("click", function () {
    grabarDato(nombre.value, edad.value, "indexedDb");
});

cargar.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
    await cargarDatos("indexedDb"); // cargo una API
});
cargar5.addEventListener("click", async function (evento) { // escucho la pulsación del botón 'guardar'
    for (let index = 0; index < 5; index++) {
        await cargarDatos("indexedDb"); // cargo una API
    }
});