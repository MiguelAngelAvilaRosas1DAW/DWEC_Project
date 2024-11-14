'use strict';

const actualizar = document.getElementById("guardar");

function mostrarDatos(tipo) {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");

    switch (tipo) {
        case "cookie":
            actualizar.addEventListener("click", function (evento) {
                grabarDato(nombre.value, valor.value, "cookie");
            });
            if (document.cookie && document.cookie.length > 0) {
                datosAcceso = document.cookie.split(";");
                cuerpo.innerHTML = "Los datos almacenados son: <br />";

                datosAcceso.forEach(function (datoAcceso) {
                    let linea = document.createElement("tr"),
                        campoNombre = document.createElement("td"),
                        campoValor = document.createElement("td"),
                        campoBorrar = document.createElement("td"),
                        campoActualizar = document.createElement("td"),

                        botonBorrar = document.createElement("button"),
                        imagenBorrar = document.createElement("img"),
                        botonActualizar = document.createElement("button"),
                        imagenActualizar = document.createElement("img");


                    datoAcceso = datoAcceso.split("=");
                    campoNombre.innerHTML = decodeURIComponent(datoAcceso[0]);
                    campoValor.innerHTML = decodeURIComponent(datoAcceso[1]);


                    botonBorrar.addEventListener('click', function () {
                        borrarDato(datoAcceso[0], "cookie");
                    });

                    imagenBorrar.src = "../../img/delete.svg";
                    imagenBorrar.width = "15";
                    imagenBorrar.height = "15";
                    imagenBorrar.style = "vertical-align: middle";


                    botonActualizar.addEventListener('click', function () {
                        borrarDato(datoAcceso[0], "cookie");
                        datoAcceso[0] = document.getElementById("nombre").value;
                        console.log(datoAcceso[0]);
                        datoAcceso[1] = document.getElementById("valor").value;
                        console.log(datoAcceso[1]);
                        actualizar.click();
                    });

                    imagenActualizar.src = "../../img/recover.svg";
                    imagenActualizar.width = "15";
                    imagenActualizar.height = "15";
                    imagenActualizar.style = "vertical-align: middle";

                    botonBorrar.appendChild(imagenBorrar);
                    campoBorrar.appendChild(botonBorrar);
                    botonActualizar.appendChild(imagenActualizar);
                    campoActualizar.appendChild(botonActualizar);

                    linea.appendChild(campoNombre);
                    linea.appendChild(campoValor);
                    linea.appendChild(campoBorrar);
                    linea.appendChild(campoActualizar);

                    cuerpo.appendChild(linea);
                });
            } else {
                cuerpo.innerHTML = 'No existen datos almacenados';
            }

            console.table(datosAcceso);
            break;

        case "localStorage":
            if (localStorage.getItem("localAcceso") && JSON.parse(localStorage.getItem("localAcceso")).length > 0) {
                datosAcceso = JSON.parse(localStorage.getItem("localAcceso"));
                cuerpo.innerHTML = "Los datos almacenados son: <br />";

                datosAcceso.forEach(function (datoAcceso) {
                    let linea = document.createElement("tr"),
                        campoNombre = document.createElement("td"),
                        campoValor = document.createElement("td"),
                        campoBorrar = document.createElement("td"),
                        campoActualizar = document.createElement("td"),
                        botonBorrar = document.createElement("button"),
                        imagenBorrar = document.createElement("img"),
                        botonActualizar = document.createElement("button"),
                        imagenActualizar = document.createElement("img");


                    campoNombre.innerHTML = datoAcceso.nombre;
                    campoValor.innerHTML = datoAcceso.valor;

                    botonBorrar.className = "borrar";
                    botonBorrar.addEventListener('click', function () {
                        borrarDato(datoAcceso.nombre, "localStorage");
                        mostrarDatos("localStorage");
                    });

                    imagenBorrar.src = "../../img/delete.svg";
                    imagenBorrar.width = "15";
                    imagenBorrar.height = "15";
                    imagenBorrar.style = "vertical-align: middle";


                    botonActualizar.addEventListener('click', function () {
                        borrarDato(datoAcceso.nombre, "localStorage");
                        datoAcceso.nombre = document.getElementById("nombre").value;
                        console.log(datoAcceso[0]);
                        datoAcceso.valor = document.getElementById("valor").value;
                        console.log(datoAcceso[1]);
                        actualizar.click();
                    });

                    imagenActualizar.src = "../../img/recover.svg";
                    imagenActualizar.width = "15";
                    imagenActualizar.height = "15";
                    imagenActualizar.style = "vertical-align: middle";

                    
                    botonBorrar.appendChild(imagenBorrar);
                    campoBorrar.appendChild(botonBorrar);
                    botonActualizar.appendChild(imagenActualizar);
                    campoActualizar.appendChild(botonActualizar);

                    linea.appendChild(campoNombre);
                    linea.appendChild(campoValor);
                    linea.appendChild(campoBorrar);
                    linea.appendChild(campoActualizar);

                    cuerpo.appendChild(linea);
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
                        let linea = document.createElement("tr"),
                            campoNombre = document.createElement("td"),
                            campoClave = document.createElement("td"),
                            campoExtra = document.createElement("td"),
                            campoBorrar = document.createElement("td"),
                            campoActualizar = document.createElement("td"),
                            
                            imgExtra = document.createElement("img"),
                            botonBorrar = document.createElement("button"),
                            imagenBorrar = document.createElement("img"),
                            botonActualizar = document.createElement("button"),
                            imagenActualizar = document.createElement("img");

                        campoNombre.innerHTML = registro.nombre;
                        campoClave.innerHTML = registro.edad;
                        imgExtra.src = registro.extra;
                        imgExtra.width = "50";
                        imgExtra.height = "50";
                        imgExtra.style = "vertical-align: middle";

                        botonBorrar.className = "borrar";
                        botonBorrar.addEventListener('click', function () {
                            borrarDato(registro.id, "indexedDb");
                        });

                        botonActualizar.addEventListener('click', function () {
                            borrarDato(registro.id, "indexedDb");
                            registro.nombre = document.getElementById("nombre").value;
                            registro.edad = document.getElementById("edad").value;
                            registro.extra = document.getElementById("extra").value;
                            actualizar.click();
                        });

                        imagenActualizar.src = "../../img/recover.svg";
                        imagenActualizar.width = "15";
                        imagenActualizar.height = "15";
                        imagenActualizar.style = "vertical-align: middle";

                        imagenBorrar.src = "../../img/delete.svg";
                        imagenBorrar.width = "15";
                        imagenBorrar.height = "15";
                        imagenBorrar.style = "vertical-align: middle";

                        campoExtra.appendChild(imgExtra);
                        botonBorrar.appendChild(imagenBorrar);
                        campoBorrar.appendChild(botonBorrar);
                        botonActualizar.appendChild(imagenActualizar);
                        campoActualizar.appendChild(botonActualizar);

                        linea.appendChild(campoNombre);
                        linea.appendChild(campoClave);
                        linea.appendChild(campoExtra);
                        linea.appendChild(campoBorrar);
                        linea.appendChild(campoActualizar);

                        cuerpo.appendChild(linea);
                    }
                }
            };
            break;
    }
}