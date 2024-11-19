"use strict"

import { taller } from './mainCola.js';

export function reparar() {
    if (taller.vacio()) {
        document.getElementById("resCola").innerHTML = "NO HAY MÁS COCHES QUE REPARAR";
    } else {
        taller.desencolar();
        console.log(taller.devolver());
        document.getElementById("resCola").innerHTML = "";
        taller.devolver().forEach(prenda => {
            document.getElementById("resCola").innerHTML +=  prenda + " ";
        });
    }
}