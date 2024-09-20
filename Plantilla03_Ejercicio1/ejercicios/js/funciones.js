"use strict"

/*Obtains the 'name' atribute from the label 'resultado and changes the text'.*/
function mostrar(resultado) {
    console.log(`Estoy mostrando el resultado del ${resultado.getAttribute('name')}`);
    resultado.innerHTML = `Estoy mostrando el resultado del ${resultado.getAttribute('name')}`;
}
