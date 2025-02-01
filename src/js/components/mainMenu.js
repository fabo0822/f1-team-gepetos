export class MainMenu extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML= /*html*/ ` 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img width="80px" src="images/f1.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" data-verocultar='[["#Equipos"],["#Pilotos", "#Vehiculos", "#Circuitos"]]'>Equipos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-verocultar='[["#Pilotos"], ["#Equipos", "#Vehiculos", "#Circuitos"]]'>Pilotos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-verocultar='[["#Vehiculos"], ["#Equipos", "#Pilotos", "#Circuitos"]]'>Vehiculos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-verocultar='[["#Circuitos"], ["#Equipos", "#Pilotos", "#Vehiculos"]]'>Circuitos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="card" id="Pilotos">
      <div class="card-header">Pilotos</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" id="Vehiculos">
      <div class="card-header">Vehiculos</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card" id="Circuitos">
      <div class="card-header">Circuitos</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

        
        `
    }
}

customElements.define('main-menu',MainMenu);