"use strict"
import { generaN } from '../aleatorio.js';
import { AFORO_TALLER, MATRICULAS, taller } from './mainCola.js';

export function paraReparar() {
    let matricula = generaN(0, 9); // + generaAleatorioLetras();

    if (taller.tamano() == AFORO_TALLER) {
        document.getElementById("resCola").innerHTML = "DEBERÍAS EMPEZAR A REPARAR LOS COCHES";
    } else {
        taller.encolar(MATRICULAS[matricula]);
        console.log(taller.devolver());
        document.getElementById("resCola").innerHTML = "";
        taller.devolver().forEach(prenda => {
            document.getElementById("resCola").innerHTML += prenda + " ";
        });
    }
}