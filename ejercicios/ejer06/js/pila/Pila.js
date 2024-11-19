"use strict"

export class Pila {
    constructor() {
        this.pila = [];
    }
    apilar(elemento) {
        return this.pila.push(elemento);
    }
    desapilar() {
        return this.pila.pop();
    }
    ojear() {
        return this.pila[this.pila.length-1];
    }
    vacia() {
        return (this.pila.length == 0);
    }
    tamano() {
        return this.pila.length;
    }
    devolver() {
        return this.pila;
    }
    vacio() {
        return (this.pila.length == 0);
    }
    mostrar() {
        console.log(this.pila);
    }
}