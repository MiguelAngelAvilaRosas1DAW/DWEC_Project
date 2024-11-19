"use strict";

navbar_functions("../../");

const del = document.getElementById("del");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const decimal = document.getElementById("decimal");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const percent = document.getElementById("percentage");
const raizCuadrada = document.getElementById("raizCuadrada");

let result = document.getElementById("result");


zero.addEventListener("click", function () {
    result.value += zero.value;
});

one.addEventListener("click", function () {
    result.value += one.value;
});

two.addEventListener("click", function () {
    result.value += two.value;
});

three.addEventListener("click", function () {
    result.value += three.value;
});

four.addEventListener("click", function () {
    result.value += four.value;
});

five.addEventListener("click", function () {
    result.value += five.value;
});

six.addEventListener("click", function () {
    result.value += six.value;
});

seven.addEventListener("click", function () {
    result.value += seven.value;
});

eight.addEventListener("click", function () {
    result.value += eight.value;
});

nine.addEventListener("click", function () {
    result.value += nine.value;
});

plus.addEventListener("click", function () {
    result.value += plus.value;

});

minus.addEventListener("click", function () {
    result.value += minus.value;
});

multiply.addEventListener("click", function () {
    result.value += multiply.value
});

division.addEventListener("click", function () {
    result.value += division.value;
});

decimal.addEventListener("click", function () {
    result.value += decimal.value;
});

percent.addEventListener("click", function () {
    result.value += percent.value;

});

raizCuadrada.addEventListener("click", function () {
    result.value += raizCuadrada.value;
});

clear.addEventListener("click", function () {
    result.value = "";

});

del.addEventListener("click", function () {
    result.value = result.value.slice(0, -1);
});

equals.addEventListener("click", function () {

    result.value = calculator();

});


function separadorDeCaracteres(value, resultOperation) {
    for (let char of resultOperation) {
        if (char === "+" || char === "-" || char === "*" || char === "/" || char === "%" || char === "√") {

            break;
        }
        value += char;
    }

    return value;
}


function calculator() {

    let errorWarning = false;

    let value1 = "";

    let simbolo = "";

    let value2 = "";

    let resultOperation = String(result.value);

    if (["++", "+-", "+*", "+/", "+%", "+√", "--", "-+", "-*", "-/", "-%", "-√", "**", "*-", "*+", "*/", "*%", "*√", "//", "/-", "/*", "/+", "/%", "/√", "%%", "%-", "%*", "%/", "%+", "%√", "√√", "√-", "√*", "√/", "√+", "√%", ".."].some(pattern => resultOperation.includes(pattern))) {
        errorWarning = true;
    }

    value1 = separadorDeCaracteres(value1, resultOperation);
    console.log("Valor1 inicial:" + value1);

    simbolo = resultOperation.slice(value1.length, value1.length + 1);

    console.log("Simbolo inicial:" + simbolo);

    resultOperation = resultOperation.slice(resultOperation.indexOf(simbolo) + 1, resultOperation.length);
    console.log(resultOperation);

    for (; resultOperation != "";) {
        value2 = "";
        value2 = separadorDeCaracteres(value2, resultOperation);
        console.log("Valor 2: " + value2);

        value1 = Number(value1);

        value2 = Number(value2);

        switch (simbolo) {
            case "+":
                value1 += value2;
                break;

            case "-":
                value1 -= value2;
                break;

            case "*":
                value1 *= value2;
                break;

            case "/":
                if (value2 !== 0) {
                    value1 /= value2;
                } else {
                    errorWarning = true;
                }
                break;

            case "%":
                value1 = (value1 * value2) / 100;
                break;

            case "√":
                if (value1 >= 0) {
                    value1 = Math.sqrt(value2);
                } else {
                    errorWarning = true;
                }
                break;
        }

        value1 = String(value1);
        console.log("Valor1 resultante:" + value1);

        value2 = String(value2);

        simbolo = resultOperation.slice(value2.length, value2.length + 1);

        resultOperation = resultOperation.slice(resultOperation.indexOf(simbolo) + 1, resultOperation.length);
        console.log(resultOperation);
    }
    
    if (errorWarning) {
        value1 = "Error";
    } else {
        value1 = Number(parseFloat(value1).toFixed(2));
    }



    return value1;

}
