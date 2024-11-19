"use strict"

import { Pila } from './Pila.js';
import { lavar } from './lavar.js';
import { paraLavar } from './paraLavar.js';

export const PRENDAS = [
    '👚 CAMISA',
    '👖 PANTALÓN',
    '👕 CAMISETA',
    '🎩 SOMBRERO',
    '🧦 CALCETINES',
    '🥋 UNIFORME',
    '🧣 BUFANDA',
    '🧤 GUANTES',
    '🩱 TRAJE DE BAÑO',
    '🧥 ABRIGO'];
export const cesto = new Pila();
export const CESTA_COLADA = 10;

document.getElementById("introducir").addEventListener("click", paraLavar);
document.getElementById("obtener").addEventListener("click", lavar);