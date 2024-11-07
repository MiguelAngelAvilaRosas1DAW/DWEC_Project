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
                case "miniCalculator":
                    mainContent.innerHTML = `
                    <div class="card">
                        <h2>Mini Calculadora</h2> 
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
            }
        });
    });
}