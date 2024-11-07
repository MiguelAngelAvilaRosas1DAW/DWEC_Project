'use strict';

const actualizar = document.getElementById("guardar"); // referencio al bóton 'guardar'

function mostrarDatos(tipo) {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo"); // referencia al objeto html dónde voy a mostrar los datos

    switch (tipo) {
        case "cookie":
            actualizar.addEventListener("click", function (evento) { // escucho la pulsación del botón 'guardar'
                grabarDato(nombre.value, valor.value, "cookie"); // grabo una 'cookie'
            });
            if (document.cookie && document.cookie.length > 0) { // si existe y hay al menos 1 'cookie'
                datosAcceso = document.cookie.split(";"); // creo un 'array' con todas las 'cookies'
                cuerpo.innerHTML = "Los datos almacenados son: <br />";

                datosAcceso.forEach(function (datoAcceso) {
                    let linea = document.createElement("tr"), // creo una fila
                        campoNombre = document.createElement("td"), // creo una celda para el nombre
                        campoValor = document.createElement("td"), // creo una celda para la clave
                        campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                        campoActualizar = document.createElement("td"), // creo una celda para el botón 'actualizar'

                        botonBorrar = document.createElement("button"), // creo un botón type="button"
                        imagenBorrar = document.createElement("img"), // creo una imagen
                        botonActualizar = document.createElement("button"), // creo un botón type="button"
                        imagenActualizar = document.createElement("img"); // creo una imagen

                    // DATOS
                    datoAcceso = datoAcceso.split("=");
                    campoNombre.innerHTML = decodeURIComponent(datoAcceso[0]); // escribo el nombre contenido en el array
                    campoValor.innerHTML = decodeURIComponent(datoAcceso[1]); // escribo el valor contenido en el array
                    // BOTÓN BORRAR

                    botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                        borrarDato(datoAcceso[0], "cookie");
                    });

                    imagenBorrar.src = "../../img/delete.svg"; // añado al botón una imagen
                    imagenBorrar.width = "15"; // añado al botón los estilos
                    imagenBorrar.height = "15";
                    imagenBorrar.style = "vertical-align: middle";

                    // BOTÓN ACTUALIZAR

                    botonActualizar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                        borrarDato(datoAcceso[0], "cookie");
                        datoAcceso[0] = document.getElementById("nombre").value;
                        console.log(datoAcceso[0]);
                        datoAcceso[1] = document.getElementById("valor").value;
                        console.log(datoAcceso[1]);
                        actualizar.click();
                    });

                    imagenActualizar.src = "../../img/recover.svg"; // añado al botón una imagen
                    imagenActualizar.width = "15"; // añado al botón los estilos
                    imagenActualizar.height = "15";
                    imagenActualizar.style = "vertical-align: middle";

                    // DOM
                    botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
                    campoBorrar.appendChild(botonBorrar); // añado el botón a la celda
                    botonActualizar.appendChild(imagenActualizar); // añado la imagen al botón
                    campoActualizar.appendChild(botonActualizar); // añado el botón a la celda

                    linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
                    linea.appendChild(campoValor); // añado a la línea la celda con el valor
                    linea.appendChild(campoBorrar); // añado a la línea la celda con el botón
                    linea.appendChild(campoActualizar); // añado a la línea la celda con el botón

                    cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
                });
            } else {
                cuerpo.innerHTML = 'No existen datos almacenados';
            }

            console.table(datosAcceso);
            break;

        case "localStorage":
            if (localStorage.getItem("localAcceso") && JSON.parse(localStorage.getItem("localAcceso")).length > 0) { // si existe y hay al menos 1
                datosAcceso = JSON.parse(localStorage.getItem("localAcceso")); // guardo el JSON de la variable localStorage 'acceso' en el array 'datosAcceso'
                cuerpo.innerHTML = "Los datos almacenados son: <br />";

                datosAcceso.forEach(function (datoAcceso) {
                    let linea = document.createElement("tr"), // creo una fila
                        campoNombre = document.createElement("td"), // creo una celda para el nombre
                        campoValor = document.createElement("td"), // creo una celda para la clave
                        campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                        campoActualizar = document.createElement("td"), // creo una celda para el botón 'actualizar'
                        botonBorrar = document.createElement("button"), // creo un botón
                        imagenBorrar = document.createElement("img"), // creo una imagen
                        botonActualizar = document.createElement("button"), // creo un botón type="button"
                        imagenActualizar = document.createElement("img"); // creo una imagen

                    // DATOS

                    campoNombre.innerHTML = datoAcceso.nombre; // escribo el nombre contenido en el array
                    campoValor.innerHTML = datoAcceso.valor; // escribo el valor contenida en el array
                    // BOTÓN
                    botonBorrar.className = "borrar"; // asigno el botón a una clase
                    botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                        borrarDato(datoAcceso.nombre, "localStorage"); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                        mostrarDatos("localStorage");
                    });

                    imagenBorrar.src = "../../img/delete.svg"; // añado al botón una imagen
                    imagenBorrar.width = "15"; // añado al botón los estilos
                    imagenBorrar.height = "15";
                    imagenBorrar.style = "vertical-align: middle";

                    // BOTÓN ACTUALIZAR

                    botonActualizar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                        borrarDato(datoAcceso.nombre, "localStorage");
                        datoAcceso.nombre = document.getElementById("nombre").value;
                        console.log(datoAcceso[0]);
                        datoAcceso.valor = document.getElementById("valor").value;
                        console.log(datoAcceso[1]);
                        actualizar.click();
                    });

                    imagenActualizar.src = "../../img/recover.svg"; // añado al botón una imagen
                    imagenActualizar.width = "15"; // añado al botón los estilos
                    imagenActualizar.height = "15";
                    imagenActualizar.style = "vertical-align: middle";

                    // DOM
                    botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
                    campoBorrar.appendChild(botonBorrar); // añado el botón a la celda
                    botonActualizar.appendChild(imagenActualizar); // añado la imagen al botón
                    campoActualizar.appendChild(botonActualizar); // añado el botón a la celda

                    linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
                    linea.appendChild(campoValor); // añado a la línea la celda con la clave
                    linea.appendChild(campoBorrar); // añado a la línea la celda con el botón
                    linea.appendChild(campoActualizar); // añado a la línea la celda con el botón

                    cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
                });
            } else {
                cuerpo.innerHTML = 'No existen datos almacenados';
            }
            console.table(datosAcceso);
            break;

        case "indexedDb":
            cuerpo.innerHTML = "Los datos almacenados son: <br />";
            solicitudDB = indexedDB.open(nombreBD, versionBD);
            solicitudDB.onerror = function (event) {
                console.error(`IndexedDB error: ${event.target.errorCode}`);
            };
            solicitudDB.onsuccess = function (event) {
                bd = event.target.result;
                canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);
                canalBD.getAll().onsuccess = function (event) {
                    let registros = event.target.result;
                    console.log(registros);
                    for (let registro of registros) {
                        let linea = document.createElement("tr"), // creo una fila
                            campoNombre = document.createElement("td"), // creo una celda para el nombre
                            campoClave = document.createElement("td"), // creo una celda para la clave
                            campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                            campoActualizar = document.createElement("td"), // creo una celda para el botón 'actualizar'
                            
                            botonBorrar = document.createElement("button"), // creo un botón
                            imagenBorrar = document.createElement("img"), // creo una imagen
                            botonActualizar = document.createElement("button"), // creo un botón type="button"
                            imagenActualizar = document.createElement("img"); // creo una imagen

                        campoNombre.innerHTML = registro.nombre; // escribo el nombre contenido en el array
                        campoClave.innerHTML = registro.edad; // escribo la clave contenida en el array

                        botonBorrar.className = "borrar"; // asigno el botón a una clase
                        botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                            borrarDato(registro.id, "indexedDb"); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                        });

                        // BOTÓN ACTUALIZAR

                        botonActualizar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                            borrarDato(registro.id, "indexedDb");
                            registro.nombre = document.getElementById("nombre").value;
                            registro.edad = document.getElementById("edad").value;
                            actualizar.click();
                        });

                        imagenActualizar.src = "../../img/recover.svg"; // añado al botón una imagen
                        imagenActualizar.width = "15"; // añado al botón los estilos
                        imagenActualizar.height = "15";
                        imagenActualizar.style = "vertical-align: middle";

                        imagenBorrar.src = "../../img/delete.svg"; // añado al botón una imagen
                        imagenBorrar.width = "15"; // añado al botón los estilos
                        imagenBorrar.height = "15";
                        imagenBorrar.style = "vertical-align: middle";

                        botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
                        campoBorrar.appendChild(botonBorrar); // añado el botón a la celda
                        botonActualizar.appendChild(imagenActualizar); // añado la imagen al botón
                        campoActualizar.appendChild(botonActualizar); // añado el botón a la celda

                        linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
                        linea.appendChild(campoClave); // añado a la línea la celda con la clave
                        linea.appendChild(campoBorrar); // añado a la línea la celda con el botón
                        linea.appendChild(campoActualizar); // añado a la línea la celda con el botón

                        cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
                    }
                }
            };
            break;
    }
}