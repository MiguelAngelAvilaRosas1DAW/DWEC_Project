"use strict"

export function generaN(inferior, superior) {
    return Math.floor(Math.random() * ((superior + 1) - inferior) + inferior); // INCLUYE EL RANGO SUPERIOR
}

export function generaC() {
    let resultado;

    resultado = generaN(65, 122);

    while (resultado > 90 && resultado < 97) {
        resultado = generaN(inferior, superior);
    }
    return resultado;
}
