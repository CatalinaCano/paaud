import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-registrar-solicitud',
    templateUrl: 'registrar-solicitud.component.html'
})

export class RegistrarSolicitudComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    estudiante =[
        {
            "n_nomeestudiante": "Nicolas",
            "n_apellestudiante":"Bernal",
            "k_codestudiente":"20121020079",
            "q_identificacionestu":"1018478847",
            "n_facultad":"Ingeniería",
            "n_proyectocurric":"Sistemas"
        }
    ];
}