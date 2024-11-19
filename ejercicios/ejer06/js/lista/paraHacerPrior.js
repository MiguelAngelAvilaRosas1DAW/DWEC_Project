"use strict"

import { generaN } from '../aleatorio.js';
import { MAX_TAREAS, TAREAS_ALMACENADAS, toDoPrior } from './mainLista.js';

export function paraHacerPrior() {
    let tarea = generaN(0, 9);
    let posicion = generaN(0, toDoPrior.tamano());

    if (toDoPrior.tamano() == MAX_TAREAS) {
        document.getElementById("resListaPrior").innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS";;
    } else {
        console.log(toDoPrior.devolver());
        toDoPrior.enlistar(TAREAS_ALMACENADAS[tarea], posicion);
        console.log(toDoPrior.devolver());
        document.getElementById("resListaPrior").innerHTML = "";
        toDoPrior.devolver().forEach(tareaActual => {
            document.getElementById("resListaPrior").innerHTML += "<p class=\"elemento\">" + tareaActual + "</p>";
        });
    }
}