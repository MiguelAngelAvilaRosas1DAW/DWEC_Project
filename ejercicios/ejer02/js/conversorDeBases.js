"use strict"

let value1 = document.getElementById("value1");

const binario = document.getElementById("binario");
const octal = document.getElementById("octal");
const hexadecimal = document.getElementById("hexadecimal");
const alfanumerico = document.getElementById("alfanumerico");

let result = document.getElementById("result");

function converter(base) {
    let numberValue1 = parseFloat(value1.value + "n");

    switch (base) {
        case "binario":
            result.value = numberValue1.toString(2);
        break;

        case "octal":
            result.value = numberValue1.toString(8);
        break;

        case "hexadecimal":
            result.value = numberValue1.toString(16);
        break;

        case "alfanumerico":
            result.value = numberValue1.toString(36);
        break;
    }
}
let numberValue1 = value1.value;

binario.addEventListener("click", function () {
    converter("binario");
});

octal.addEventListener("click", function () {
    converter("octal");
});

hexadecimal.addEventListener("click", function () {
    converter("hexadecimal");
});

alfanumerico.addEventListener("click", function () {
    converter("alfanumerico");
});