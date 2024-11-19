"use strict"

import { toDoPrior } from './mainLista.js';

export function hacerPrior() {
    if (toDoPrior.vacio()) {
        document.getElementById("resListaPrior").innerHTML = "NO HAY MÁS TAREAS QUE HACER";
    } else {
        toDoPrior.desenlistar(toDoPrior.posicionMayor().posicion);
        console.log(toDoPrior.devolver());
        document.getElementById("resListaPrior").innerHTML = "";
        toDoPrior.devolver().forEach(tarea => {
            document.getElementById("resListaPrior").innerHTML += "<p class=\"elemento\">" + tarea + "</p>";
        });
    }
}