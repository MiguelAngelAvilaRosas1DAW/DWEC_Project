"use strict";

const storedUsername = "miguel";
const storedPassword = "elmasalto";

const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const mainContent = document.getElementById("mainContent");
const submitButton = loginForm.querySelector('input[type="submit"]');
const loginMessage = document.getElementById("loginMessage");


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

        setTimeout(function () {
            loginForm.style.display = "none";
            mainContent.style.display = "block";
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