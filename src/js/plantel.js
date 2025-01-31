class plantel{
    constructor(nombre,pais,ubicacion){
        this._nombre = nombre,
        this._pais = pais,
        this._ubicacion = ubicacion;
    }
    get nombre (){
        return this._nombre;

    }
    set nombre (v_nombre){
        this._nombre = v_nombre
    }
    get pais (){
        return this._pais;

    }
    set pais (v_pais){
        this._pais = v_pais
    }
    get ubicacion (){
        return this._ubicacion;

    }
    set ubicacion (v_ubicacion){
        this._nombre = v_ubicacion
    }
   
}