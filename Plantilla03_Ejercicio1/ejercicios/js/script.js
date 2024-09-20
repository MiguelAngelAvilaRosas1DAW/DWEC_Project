"use strict"

/*Gets the labels with the ID 'boton' and 'resultado' and when the button 'boton' is pressed,
calls the function 'mostrar' to change the label with the ID 'resultado'.*/
const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");
boton.addEventListener("click", function () {
    mostrar(resultado);
});