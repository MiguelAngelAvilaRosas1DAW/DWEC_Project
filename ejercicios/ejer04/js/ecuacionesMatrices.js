"use strict"

function ecuacionesMatrices(matrizA, matrizB, matrizResultado, operador) {

    let num1;
    let num2;

    for (let i = 0; i < matrizResultado.length; i++) {
        for (let x = 0; x < matrizResultado.length; x++) {
            num1 = matrizA[i][x];
            num2 = matrizB[i][x];

            switch (operador) {
                case "sumar":
                    matrizResultado[i][x] = num1 + num2;
                break;

                case "restar":
                    matrizResultado[i][x] = num1 - num2;
                break;

                case "multiplicar":
                    matrizResultado[i][x] = num1 * num2;
                break;
            }
        }
    }
    

    return matrizResultado;

}