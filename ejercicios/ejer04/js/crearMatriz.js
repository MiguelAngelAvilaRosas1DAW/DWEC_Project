"use strict"

function crearMatriz(matrizDimensions) {

    let matriz = [];

    for (let i = 0; i < matrizDimensions; i++) {
        matriz[i] = [];
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let x = 0; x < matrizDimensions; x++) {
            matriz[i][x] = 0;
        }
    }

    console.log("Matriz creada con exito.");

    return matriz;
}