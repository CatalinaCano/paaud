import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ver-tareas-asignadas',
    templateUrl: 'ver-tareas-asignadas.component.html'
})

export class VerTareasAsignadasComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    actividades = [
        {
            "n_estudiante": "1",
            "n_codigo": "20121020079",
            "n_nombres": "Diana Catalina",
            "n_apellidos": "Cano Narvaez",
            "n_facultad": "Ingeniería",
            "n_carrera": "Ing. Sistemas",
            "n_actividad":"Archivo",
            "n_tipoActividad":"Administrativo",
            "n_dependencia":"UIFI",
            "n_responsable":"Gloria Giraldo"
        },
        {
            "n_estudiante": "1",
            "n_codigo": "20121020079",
            "n_nombres": "Diana Catalina",
            "n_apellidos": "Cano Narvaez",
            "n_facultad": "Ingeniería",
            "n_carrera": "Ing. Sistemas",
            "n_actividad":"Monitoria",
            "n_tipoActividad":"Académico",
            "n_dependencia":"Coordincación Sistemas",
            "n_responsable":"Sandra Reyes"
        }
    ];
}