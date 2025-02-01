import {pilotos} from "./db/datapilots.js"
import { equipos } from "./db/dataTeams.js";
import { vehiculos } from "./db/dataVehiculos.js";
import { circuitos } from "./db/dataCircuitos.js";
import {Piloto} from "./js/piloto.js"
import { MainMenu } from "./js/components/mainMenu.js";
import { FrmEquipos } from "./js/components/frmequipo.js";
let pils=[];
procesarPil()
function procesarPil(){
    pilotos.forEach(pil =>
        pils.push(new Piloto(pil.id,pil.nombre,pil.rol))
    );
}
console.log(pils)


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

fillPilotoSelect('#Pilot');
function fillPilotoSelect (v_selectId,data){
    clearSelect();
    const selectData = selector(v_selectId);
    const itemStart = document.createElement('option');
    itemStart.innerHTML = 'seleccione un item';
    itemStart.selected;
    selectData.appendchild(itemStart);

    data.forEach(itemDep =>{
        const item =document.createElement('option');
        item.value = itemDep.id;
        item.innerHTML =itemDep.Piloto;
        selectData.appendchild(item);

    })
}
function clearSelect(v_element){
    const selectData = selector(v_element);
    const option = selectData.querySelectorAll('option');
    option.forEach(element => {
        selectData.removeChild(element);
    })
}

document.querySelector('#guardarEquipo').addEventListener('click',(e)=>{
    const formData = document.forms['FrmEquipos'];
    for(let item of formData){
        console.log(item.value);
    }
})