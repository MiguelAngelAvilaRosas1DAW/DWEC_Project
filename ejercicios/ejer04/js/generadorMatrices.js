"use strict";

navbar_functions("../../");

let matrizDimensions = document.getElementById("matrizDimensions");
let lowerRange = document.getElementById("lowerRange");
let superiorRange = document.getElementById("superiorRange");

const valoresAleatorios = document.getElementById("valoresAleatorios");
const generarMatrices = document.getElementById("generarMatrices");

const random = document.getElementById("random");
const stopButton = document.getElementById("stop");
const fast = document.getElementById("fast");
const slow = document.getElementById("slow");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");

let matrizA = document.getElementById("matrizA");
let matrizB = document.getElementById("matrizB");
let matrizR = document.getElementById("matrizR");

let dataMatrizA;
let dataMatrizB;
let matrizResultado;

let continueRandom = false;
let time = 2000;

let operacionMatrices;

valoresAleatorios.addEventListener("click", function () {
    matrizDimensions.value = numeroAleatorio(1, 10);
    lowerRange.value = numeroAleatorio(1, 100);
    superiorRange.value = numeroAleatorio(1, 100);
});

generarMatrices.addEventListener("click", function () {
    if (matrizDimensions.value == "" || lowerRange.value == "" || superiorRange.value == "") {
        matrizB.replaceChildren("Debe introducir TODOS los valores numericos que se le piden.");
        console.error("Debe introducir valores en todos los campos.");
    } else if (matrizDimensions.value < 0 || lowerRange.value < 0 || superiorRange.value < 0) {
        matrizB.replaceChildren("NO se permite utilizar numeros NEGATIVOS.");
        console.error("No introducir numeros negativos como valores.");
    } else {

        console.log("Las dimensiones de la matriz son de " + matrizDimensions.value);
        console.log("Valor minimo: " + lowerRange.value);
        console.log("Valor maximo: " + superiorRange.value);

        matrizDimensions.value = Math.round(matrizDimensions.value);
        lowerRange.value = Math.round(lowerRange.value);
        superiorRange.value = Math.round(superiorRange.value);

        dataMatrizA = crearMatriz(matrizDimensions.value);
        dataMatrizA = rellenarMatriz(dataMatrizA, lowerRange.value, superiorRange.value);
        matrizA.replaceChildren(mostrarMatriz(dataMatrizA));

        dataMatrizB = crearMatriz(matrizDimensions.value);
        dataMatrizB = rellenarMatriz(dataMatrizB, lowerRange.value, superiorRange.value);
        matrizB.replaceChildren(mostrarMatriz(dataMatrizB));
    }

});

plus.addEventListener("click", function () {
    matrizResultado = crearMatriz(matrizDimensions.value);
    matrizResultado = ecuacionesMatrices(dataMatrizA, dataMatrizB, matrizResultado, "sumar");
    console.table(matrizResultado);
    matrizR.replaceChildren(mostrarMatriz(matrizResultado));
    operacionMatrices = "sumar";
    console.log("Sumando matrices...");
});

minus.addEventListener("click", function () {
    matrizResultado = crearMatriz(matrizDimensions.value);
    matrizResultado = ecuacionesMatrices(dataMatrizA, dataMatrizB, matrizResultado, "restar");
    matrizR.replaceChildren(mostrarMatriz(matrizResultado));
    operacionMatrices = "restar";
    console.log("Restando matrices...");
});

multiply.addEventListener("click", function () {
    matrizResultado = crearMatriz(matrizDimensions.value);
    matrizResultado = ecuacionesMatrices(dataMatrizA, dataMatrizB, matrizResultado, "multiplicar");
    matrizR.replaceChildren(mostrarMatriz(matrizResultado));
    operacionMatrices = "multiplicar";
    console.log("Multiplicando matrices...");
});

function ejecutarOpcion() {
    if (!continueRandom) return;

    valoresAleatorios.click();

    generarMatrices.click();

    switch (operacionMatrices) {
        case "sumar":
            plus.click();
            break;

        case "restar":
            minus.click();
            break;

        case "multiplicar":
            multiply.click();
            break;
    }

    setTimeout(ejecutarOpcion, time);
}

random.addEventListener("click", function () {
    continueRandom = true;
    console.log("MODO ALEATORIO ACTIVADO");
    ejecutarOpcion();
    console.log("Tiempo de cambio: " + time);
});

stopButton.addEventListener("click", function () {
    continueRandom = false;
    console.log("MODO ALEATORIO DESACTIVADO");
});

fast.addEventListener("click", function () {
    time -= 500;
    console.log("Tiempo reducido a: " + time);
});

slow.addEventListener("click", function () {
    time += 500;
    console.log("Tiempo aumentado a: " + time);
});