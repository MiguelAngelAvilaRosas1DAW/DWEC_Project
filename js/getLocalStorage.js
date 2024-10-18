"use strict"

function getLocalStorage(name) {
    const value = localStorage.getItem(name);
    console.log(`localStorage: Recuperado ${name}=${value}`);
    return value ? decodeURIComponent(value) : null;
}