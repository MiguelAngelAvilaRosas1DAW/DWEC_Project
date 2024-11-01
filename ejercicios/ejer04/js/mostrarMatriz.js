"use strict"

function mostrarMatriz(matriz) {
    let tabla = document.createElement('table');
    for (let i = 0; i < matriz.length; i++) {
        let fila = document.createElement('tr');
        for (let x = 0; x < matriz.length; x++) {
            let contenido = document.createTextNode(matriz[i][x]);
            let columna = document.createElement('td');
            columna.appendChild(contenido);
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);

    }

    return tabla;
}