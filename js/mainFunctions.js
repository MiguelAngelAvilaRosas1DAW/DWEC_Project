"use strict";

const exit = document.getElementById("logOut");
const ejercicios = document.getElementsByClassName("ejercicios");
const mainContent = document.getElementById("mainContent");

function navbar_functions(link) {

    exit.addEventListener("click", function () {
        const tryAgain = confirm("¿Quieres cerrar sesión?");
            if (tryAgain) {
                
                deleteLocalStorage("loggedIn");
                
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
            }
        });
    });
}