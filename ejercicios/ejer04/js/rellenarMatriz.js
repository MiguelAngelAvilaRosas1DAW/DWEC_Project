"use strict"

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function rellenarMatriz(matriz, lowerRange, superiorRange) {

    for (let i = 0; i < matriz.length; i++) {
        for (let x = 0; x < matriz.length; x++) {
            matriz[i][x] = numeroAleatorio(lowerRange,superiorRange);
        }
    }

    console.table(matriz);

    return matriz;
}