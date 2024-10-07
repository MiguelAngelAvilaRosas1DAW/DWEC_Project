"use strict";

function getCookie(name) {
    const nameCookie = name + "=";
    const cookiesArray = document.cookie.split(';');
    for(let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameCookie) === 0) {
            return "true";
        }
    }
    return null;
}