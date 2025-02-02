export class Equipo {
    constructor(nombre, pais, motor, pilotos, imagen) {
        this._nombre = nombre;
        this._pais = pais;
        this._motor = motor;
        this._pilotos = pilotos; // Array de IDs de pilotos
        this._imagen = imagen;
    }

    get nombre() {
        return this._nombre;
    }

    get pais() {
        return this._pais;
    }

    get motor() {
        return this._motor;
    }

    get pilotos() {
        return this._pilotos;
    }

    get imagen() {
        return this._imagen;
    }
}
