import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'asignar-tarea',
    templateUrl: 'asignar-tarea.component.html'
})

export class AsignarTareaComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    estudiantes = [
        {
            "n_estudiante": "1",
            "n_codigo": "20121020079",
            "n_nombres": "Diana Catalina",
            "n_apellidos": "Cano Narvaez",
            "n_facultad": "Ingeniería",
            "n_carrera": "Ing. Sistemas"
        },
        {
            "n_estudiante": "2",
            "n_codigo": "20151020009",
            "n_nombres": "Leonardo",
            "n_apellidos": "Ramirez",
            "n_facultad": "Artes",
            "n_carrera": "Arte Dramatico"
        }
    ];

    actividades = [
        {
            "n_actividad": "Investigación",
            "n_responsable": "Gloria Giraldo",
            "n_dependencia": "UIFI"
        },

        {
            "n_actividad": "Académico",
            "n_responsable": "Jaquelin Castillo",
            "n_dependencia": "Cordinación Sistemas"
        },
        {
            "n_actividad": "Aeropuerto",
            "n_responsable": "Alexis Granados",
            "n_dependencia": "CERI"
        },
    ];
    buscar() {
        console.log("Buscar aqui");
    }
}