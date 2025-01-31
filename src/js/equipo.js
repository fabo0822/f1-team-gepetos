class Equipo extends plantel {
    static idEquipo = 0;
    constructor (nombre,pais,ubicacion,motor,pilotos,imagen){
        super(nombre,pais,ubicacion);
        this._id= ++Equipo.idEquipo;
        this._motor = motor;
        this._pilotos = pilotos;
        this._imagen = imagen;
    }
    get id(){
        return this.id;
    }

    get  motor(){
        return this._motor;
    }

    set  motor (v_motor){
        this.motor = v_motor;
    }


    get  pilotos(){
        return this._pilotos;
    }

    set  pilotos (v_pilotos){
        this.motor = v_pilotos;
    }
    
    get imagen(){
        return this._imagen;
    }
}

