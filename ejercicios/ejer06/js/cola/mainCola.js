"use strict"
import { Cola } from './Cola.js';
import { paraReparar } from './paraReparar.js';
import { reparar } from './reparar.js';

export const MATRICULAS = [
    '🚗 12345-ABC',
    '🛵 23456-BCD',
    '🛻 34567-CDE',
    '🚚 45678-DEF',
    '🛵 56789-EFG',
    '🚗 67890-FGH',
    '🛻 78901-GHI',
    '🚚 89012-HIJ',
    '🚗 90123-IJK',
    '🛵 98765-JKL'];
export const taller = new Cola();
export const AFORO_TALLER = 10;
export let ultCoche = "";

document.getElementById("llegada").addEventListener("click", paraReparar);
document.getElementById("atender").addEventListener("click", reparar);