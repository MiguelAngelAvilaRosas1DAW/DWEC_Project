"use strict"

let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");

const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
const entero = document.getElementById("entero");
const decimal = document.getElementById("decimal");
const factorial = document.getElementById("factorial");
const resto = document.getElementById("resto");

let result = document.getElementById("result");

function factorialIterativo(num) {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
    resultado *= i;
    }
    return resultado;
}

function calculator(operator) {
    let numberValue1 = parseFloat(value1.value + "n");
    let numberValue2 = parseFloat(value2.value + "n");
    let numberResult = parseFloat(result.value + "n");

    switch (operator) {
        case "suma":
            
            result.value = `${numberValue1 + numberValue2}`;
            if (result.value === NaN) {
                result.value = "";
            }

        break;

        case "resta":
            
            result.value = `${numberValue1 - numberValue2}`;

        break;

        case "multiplicacion":
            
            result.value = `${numberValue1 * numberValue2}`;

        break;

        case "division":
            
            result.value = `${numberValue1 / numberValue2}`;

        break;

        case "entero":
            console.log(numberResult)
            value1.value = Math.trunc(numberResult);

        break;

        case "decimal":
            
            value2.value = result.value - Math.trunc(numberResult);

        break;

        case "factorial":
            
            result.value = factorialIterativo(numberValue1);

        break;

        case "resto":
            
            result.value = `${numberValue1 % numberValue2}`;

        break;
    }

}

suma.addEventListener("click", function () {
    calculator("suma");
});

resta.addEventListener("click", function () {
    calculator("resta");
});

multiplicacion.addEventListener("click", function () {
    calculator("multiplicacion");
});

division.addEventListener("click", function () {
    calculator("division");
});

entero.addEventListener("click", function () {
    calculator("entero");
});

decimal.addEventListener("click", function () {
    calculator("decimal");
});

factorial.addEventListener("click", function () {
    calculator("factorial");
});

resto.addEventListener("click", function () {
    calculator("resto");
});