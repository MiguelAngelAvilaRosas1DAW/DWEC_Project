"use strict";

const exit = document.getElementById("logOut");
const ejercicios = document.getElementById("ejercicios");
const mainContent = document.getElementById("mainContent");

function navbar_functions(link) {
    if (getCookie("loggedin") === "true") {
        console.log("La cookie existe.");
        
        } else {
            console.log("La cookie no existe.");
            window.location.assign(`${link}/index.html`);
    
    }
    
    ejercicios.addEventListener("change", function () {
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
        }
    });   
}

exit.addEventListener("click", function () {
    eraseCookie("loggedin");
    location.reload();
});