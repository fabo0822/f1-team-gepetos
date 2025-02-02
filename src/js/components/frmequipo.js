export class FrmEquipos extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML= /*html*/ `
        <!-- Cards -->
      <div class="card" id="Equipos">
      <div class="card-header">Registro de equipos f1</div>
      <div class="card-body">
      <form>
      <div class="row g-3">
        <!-- Primera columna -->
        <div class="col-md-4">
          <label for="Pilot" class="form-label">Equipo</label>
          <select class="form-select" id="nombre" aria-label="Selecciona un equipo">
            <option selected>Seleccione un equipo</option>
          </select>
        </div>
    
        <!-- Segunda columna -->
        <div class="col-md-4">
          <label for="inputPais" class="form-label">País</label>
          <input type="text" class="form-control" id="pais" placeholder="País">
        </div>
    
        <!-- Tercera columna -->
        <div class="col-md-4">
          <label for="inputMotor" class="form-label">Motor</label>
          <input type="text" class="form-control" id="motor" placeholder="Motor">
        </div>
      </div>
    
      <div class="row g-3 mt-2">
        <!-- Pilotos -->
        <div class="col-md-6">
        <label for="Pilot" class="form-label">Pilotos</label>
        <select class="form-select" id="pilotos" aria-label="Selecciona un equipo">
          <option selected>Seleccione un Piloto</option>
        </select>
        </div>
    
        <!-- Imagen -->
        <div class="col-md-6">
          <label for="imagen" class="form-label">Imagen</label>
          <input type="text" class="form-control" id="imagen" placeholder="URL de la imagen">
        </div>
      </div>
    
      <div class="mt-3">
        <a href="#" class="btn btn-primary mt-3" id="guardarEquipo">Guardar</a>
      </div>
    </form>
    
      </div>
    </div>
  
        ` 
    
    }
}

customElements.define('frm-equipos',FrmEquipos)