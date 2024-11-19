"use strict";

const exit = document.getElementById("logOut");
const ejercicios = document.getElementsByClassName("ejercicios");
const mainContent = document.getElementById("mainContent");

//Poner dentro de una funcion.

function navbar_functions(link) {

    exit.addEventListener("click", function () {
        const tryAgain = confirm("¿Quieres cerrar sesión?");
        if (tryAgain) {

            deleteIndexedDB("loggedIn");

            setTimeout(function () {
                window.location.href = `${link}index.html`;
            }, 2000);
        }

    });

    console.log(ejercicios);

    Array.from(ejercicios).forEach(ejercicio => {
        ejercicio.addEventListener("change", function () {

            const selectedOption = this.value;
            switch (selectedOption) {
                case "Calculator":
                    mainContent.innerHTML = `
                    <div class="card">
                        <h2>Calculadora</h2> 
                        <p>Una calculadora para realizar diferentes operaciones aritmaticas.</p>
                        <a href="${link}/ejercicios/ejer01/index.html">Ir</a>
                    </div>`;
                    break;
                case "converter":
                    mainContent.innerHTML = `
                    <div class="card">
                        <h2>Conversor de bases</h2>
                        <p>Convierte un valor que le pases a binario, octal o hexadecimal.</p>
                        <a href="${link}/ejercicios/ejer02/index.html">Ir</a>
                    </div>`;
                    break;
                case "textTransformator":
                    mainContent.innerHTML = `
                    <div class="card">
                        <h2>Transformador de texto</h2>
                        <p>Permite modificar un texto escrito por el usuario.</p>
                        <a href="${link}/ejercicios/ejer03/index.html">Ir</a>
                    </div>`;
                    break;
                case "matrizTransformator":
                    mainContent.innerHTML = `
                    <div class="card">
                        <h2>Transformador de matrices</h2>
                        <p>Genera una matriz y realiza operaciones con el resultado.</p>
                        <a href="${link}/ejercicios/ejer04/index.html">Ir</a>
                    </div>`;
                    break;
                case "almacenamientoCookie":
                    mainContent.innerHTML = `
                    <div class="card">
                        <h2>Almacenamiento con Cookies</h2>
                        <p>Almacena una tabla con datos de una API utilizando cookies.</p>
                        <a href="${link}/ejercicios/ejer05/cookie.html">Ir</a>
                    </div>`;
                    break;
                case "almacenamientoLocalStorage":
                    mainContent.innerHTML = `
                        <div class="card">
                            <h2>Almacenamiento con LocalStorage</h2>
                            <p>Almacena una tabla con datos de una API utilizando localStorage.</p>
                            <a href="${link}/ejercicios/ejer05/localStorage.html">Ir</a>
                        </div>`;
                    break;
                case "almacenamientoIndexedDb":
                    mainContent.innerHTML = `
                            <div class="card">
                                <h2>Almacenamiento con IndexedDB</h2>
                                <p>Almacena una tabla con datos de una API utilizando indexedDB</p>
                                <a href="${link}/ejercicios/ejer05/indexedDB.html">Ir</a>
                            </div>`;
                    break;
                case "pila":
                    mainContent.innerHTML = `
                                <div class="card">
                                    <h2>Pila</h2>
                                    <p>Introduce y borra datos en una pila de ropa</p>
                                    <a href="${link}/ejercicios/ejer06/pila.html">Ir</a>
                                </div>`;
                    break;
                case "cola":
                    mainContent.innerHTML = `
                                    <div class="card">
                                        <h2>Cola</h2>
                                        <p>Introduce y borra datos en una cola de coches</p>
                                        <a href="${link}/ejercicios/ejer06/cola.html">Ir</a>
                                    </div>`;
                    break;
                case "lista":
                    mainContent.innerHTML = `
                                        <div class="card">
                                            <h2>Lista</h2>
                                            <p>Introduce y borra datos en una lista, quitando bojetos de forma aleatoria e indicando algunos con prioridad</p>
                                            <a href="${link}/ejercicios/ejer06/lista.html">Ir</a>
                                        </div>`;
                    break;
            }
        });
    });
}