"use strict"

import { cesto } from './mainPila.js';

export function lavar() {
    if (cesto.vacio()) {
        document.getElementById("resPila").innerHTML = "NO HAY MÁS ROPA QUE LAVAR";
    } else {
        cesto.desapilar();
        console.log(cesto.devolver());
        document.getElementById("resPila").innerHTML = "";
        cesto.devolver().forEach(prenda => {
            document.getElementById("resPila").innerHTML += "<p class=\"elemento\">" + prenda + "</p>";
        });
    }
}