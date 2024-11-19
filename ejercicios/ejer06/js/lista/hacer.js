"use strict"

import { generaN } from '../aleatorio.js';
import { toDoO } from './mainLista.js';

export function hacer() {
    let posicion = generaN(0, toDoO.tamano());

    if (toDoO.vacio()) {
        document.getElementById("resLista").innerHTML = "NO HAY MÁS TAREAS QUE HACER";
    } else {
        toDoO.desenlistar(posicion);
        console.log(toDoO.devolver());
        document.getElementById("resLista").innerHTML = "";
        toDoO.devolver().forEach(tarea => {
            document.getElementById("resLista").innerHTML += "<p class=\"elemento\">" + tarea + "</p>";
        });
    }
}