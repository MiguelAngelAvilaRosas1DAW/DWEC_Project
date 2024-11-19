"use strict"

import { generaN } from '../aleatorio.js';
import { CESTA_COLADA, PRENDAS, cesto } from './mainPila.js';

export function paraLavar() {
    let prenda = generaN(0, 9); // + generaAleatorioLetras();

    if (cesto.tamano() == CESTA_COLADA) {
        document.getElementById("resPila").innerHTML = "DEBERÍAS EMPEZAR A LAVAR LA ROPA";
    } else {
        cesto.apilar(PRENDAS[prenda]);
        console.log(cesto.devolver());
        document.getElementById("resPila").innerHTML = "";
        cesto.devolver().forEach(prenda => {
            document.getElementById("resPila").innerHTML += "<p class=\"elemento\">" + prenda + "</p>";
        });
    }
}