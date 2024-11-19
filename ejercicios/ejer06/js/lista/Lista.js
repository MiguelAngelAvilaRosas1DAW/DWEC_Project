"use strict"

export class Lista {
    constructor() {
        this.lista = [];
    }
    enlistar(elemento, posicion) {
        return this.lista.splice(posicion, 0, elemento);
    }
    desenlistar(posicion) {
        return this.lista.splice(posicion, 1);
    }
    tamano() {
        return this.lista.length;
    }
    mostrar() {
        console.log(this.lista);
    }
    devolver() {
        return this.lista;
    }
    vacio() {
        return (this.lista.length == 0);
    }
    posicionMayor() {
        let mayor = {
            posicion: 0,
            contenido: "",
        };
        if (!this.vacio()) {
            mayor.contenido = this.lista[mayor.posicion];
            for (let i = 1; i < this.lista.length; i++) {
                if (mayor.contenido < this.lista[i]) {
                    mayor.posicion = i;
                    mayor.contenido = this.lista[i];
                }
            }
        }
        return mayor;
    }
}