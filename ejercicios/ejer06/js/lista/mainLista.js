"use strict"
import { hacer } from './hacer.js';
import { hacerPrior } from './hacerPrior.js';
import { Lista } from './Lista.js';
import { paraHacer } from './paraHacer.js';
import { paraHacerPrior } from './paraHacerPrior.js';

export const TAREAS_ALMACENADAS = [
    '📞 LLAMAR',
    '📫 RECOGER',
    '🏋️‍♂️ ENTRENAR',
    '📘 ORDENAR',
    '🧽 FREGAR',
    '🛒 COMPRAR',
    '🧹 LIMPIAR',
    '📖 ESTUDIAR',
    '🚿 LAVARSE',
    '🍲 COMIDA'];
export const toDoO = new Lista();
export const toDoPrior = new Lista();
export const MAX_TAREAS = 10;

document.getElementById("anadir").addEventListener("click", paraHacer);
document.getElementById("eliminar").addEventListener("click", hacer);

document.getElementById("anadirPrior").addEventListener("click", paraHacerPrior);
document.getElementById("eliminarPrior").addEventListener("click", hacerPrior);