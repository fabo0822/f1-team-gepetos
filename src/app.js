import {pilotos} from "./db/datapilots.js"
import { equipos } from "./db/dataTeams.js";
import { vehiculos } from "./db/dataVehiculos.js";
import { circuitos } from "./db/dataCircuitos.js";
import {Piloto} from "./js/piloto.js"
import { MainMenu } from "./js/components/mainMenu.js";
import { FrmEquipos } from "./js/components/frmequipo.js";


document.querySelectorAll(".nav-link").forEach((val,id) => {
    val.addEventListener("click", (e)=>{
        let data =JSON.parse(e.target.dataset.verocultar);
        let cardVer = document.querySelector(data[0]);
        cardVer.style.display ='block';
        data[1].forEach(card => {
            let cardActual = document.querySelector(card);
            cardActual.style.display = 'none';
        });
        e.stopImmediatePropagation();
         e.preventDefault();

    })
});


