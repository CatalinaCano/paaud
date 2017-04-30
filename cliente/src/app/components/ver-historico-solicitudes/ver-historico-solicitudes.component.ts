import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ver-historico-solicitudes',
    templateUrl: 'ver-historico-solicitudes.component.html'
})

export class VerHistoricoSolicitudesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    
    convocatorias =[
        {
            "n_solicitud": "1",
            "n_codigo":"20121020079",
            "n_nombres":"Diana Catalina",
            "n_apellidos":"Cano Narvaez",
            "n_facultad":"Ingeniería",
            "n_carrera":"Ing. Sistemas",
            "n_fecha_r":"01/02/2015",
            "n_estado":"Aprobada",
            "n_responsable": "Maria Castillo"
        },
         {
            "n_solicitud": "2",
            "n_codigo":"20121020079",
            "n_nombres":"Diana Catalina",
            "n_apellidos":"Cano Narvaez",
            "n_facultad":"Ingeniería",
            "n_carrera":"Ing. Sistemas",
            "n_fecha_r":"16/08/2016",
            "n_estado":"Aprobada",
            "n_responsable": "Camilo Velandia"
        },
         {
            "n_solicitud": "3",
            "n_codigo":"20121020079",
            "n_nombres":"Diana Catalina",
            "n_apellidos":"Cano Narvaez",
            "n_facultad":"Ingeniería",
            "n_carrera":"Ing. Sistemas",
            "n_fecha_r":"10/03/2017",
            "n_estado":"En proceso",
            "n_responsable": "Nicolas Bernal"
        }
    ];
}