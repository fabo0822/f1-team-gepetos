export class Piloto {
    constructor(id, nombre, equipo, rol) {
        this._id = id;
        this._nombre = nombre;
        this._equipo = equipo; // Nombre del equipo
        this._rol = rol;
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get equipo() {
        return this._equipo;
    }
    set equipo(v_equipo){
        this.equipo = v_equipo;
    }

    get rol() {
        return this._rol;
    }
    set rol (v_rol){
        this._rol = v_rol;
    }
}
