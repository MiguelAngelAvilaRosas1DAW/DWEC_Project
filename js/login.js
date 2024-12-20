"use strict";

const storedUsername = "miguel";
const storedPassword = "elmasalto";

const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const mainContent = document.getElementById("mainContent");
const submitButton = loginForm.querySelector('input[type="submit"]');
const loginMessage = document.getElementById("loginMessage");

async function abrirBaseDeDatos() {
    await openDatabase();
}
abrirBaseDeDatos();

async function checkLoginStatus() {
    const result = await getIndexedDB("loggedIn");
    if (result === "true") {
        window.location.href = "./mainPage.html";
    }
}

checkLoginStatus();

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

    const usernameRegex = /^.{3,}$/;
    if (!usernameRegex.test(usernameValue)) {
        alert("El nombre de usuario debe tener al menos 3 caracteres.");
        return;
    }

    if (usernameValue === storedUsername && passwordValue === storedPassword) {
        loginMessage.style.color = "green";
        loginMessage.innerText = "¡Bienvenido!";

        setIndexedDB("loggedIn", "true");

        setTimeout(function () {
            window.location.assign("mainPage.html");
            loginMessage.innerText = "";
        }, 2000);
    } else {
        username.disabled = false;
        password.disabled = false;
        loginForm.querySelector('input[type="submit"]').disabled = false;
        loginForm.reset();
        loginMessage.style.color = "red";
        loginMessage.innerText = "Acceso denegado.";
    }
});