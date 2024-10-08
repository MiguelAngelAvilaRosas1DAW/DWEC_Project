"use strict";

function setCookie(name, value, time) {
    const date = new Date();
    console.log("Conectado el " + date);
    date.setTime(date.getTime() + (time * 60 * 1000));
    const expires = date.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=/;SameSite=Strict;Secure`;
    console.log("Cookie creada: " + document.cookie);
    console.log("Duración de la cookie: " + time + " minuto/s.");
}