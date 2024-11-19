"use strict"

import { generaN } from '../aleatorio.js';
import { MAX_TAREAS, TAREAS_ALMACENADAS, toDoO } from './mainLista.js';

export function paraHacer() {
    let tarea = generaN(0, 9);
    let posicion = generaN(0, toDoO.tamano());
    console.log("Añadiendo tarea...");

    if (toDoO.tamano() == MAX_TAREAS) {
        document.getElementById("resLista").innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS";;
    } else {
        toDoO.enlistar(TAREAS_ALMACENADAS[tarea], posicion);
        console.log(toDoO.devolver());
        document.getElementById("resLista").innerHTML = "";
        toDoO.devolver().forEach(tareaActual => {
            document.getElementById("resLista").innerHTML += "<p class=\"elemento\">" + tareaActual + "</p>";
        });
    }
}