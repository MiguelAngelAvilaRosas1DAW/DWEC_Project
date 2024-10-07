"use strict";

const storedUsername = "miguel";
const storedPassword = "elmasalto";

const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const mainContent = document.getElementById("mainContent");
const submitButton = loginForm.querySelector('input[type="submit"]');
const loginMessage = document.getElementById("loginMessage");

if (getCookie("loggedin") === "true") {
    window.location.assign("mainPage.html");
    
    } else {
        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();
        
            const usernameValue = username.value;
            const passwordValue = password.value;
        
            if (usernameValue.length < 3) {
                alert("El nombre de usuario debe tener al menos 3 caracteres.");
                return;
            }
        
            if (usernameValue === storedUsername && passwordValue === storedPassword) {
                loginMessage.style.color = "green" ;
                loginMessage.innerText = "¡Bienvenido!";
        
                setCookie("loggedin", usernameValue, 1);
        
                setTimeout(function () {
                    window.location.assign("mainPage.html");
                    loginMessage.innerText = "";
                }, 2000);
            } else {
                username.disabled = false;
                    password.disabled = false;
                    loginForm.querySelector('input[type="submit"]').disabled = false;
                    loginForm.reset();
                    loginMessage.style.color = "red" ;
                    loginMessage.innerText = "Acceso denegado.";
            }
        
        });
}