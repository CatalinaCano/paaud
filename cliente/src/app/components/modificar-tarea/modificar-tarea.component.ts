import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'modificar-tarea',
    templateUrl: 'modificar-tarea.component.html'
})

export class ModificarTareaComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }

  tipo_actividades=[
        {"n_actividad":"Academicas"},
        {"n_actividad":"Administrativas"},
        {"n_actividad":"Investigativas"}
    ];

    estados=[
        {"n_estado":"Disponible"},
        {"n_estado":"Cancelado"},
        {"n_estado":"En validación"},
        {"n_estado":"Cerrada"}
    ];

    responsables=[
        {"n_responsable":"Maria Bermudez"},
        {"n_responsable":"Gloria Giraldo"},
        {"n_responsable":"Joaquin Velandia"}
        ];

        dependencias=[
            {"n_dependencia":"UIFI"},
            {"n_dependencia":"Cordinación de Sistemas"},
            {"n_dependencia":"CERI"},
            {"n_dependencia":"Bienestar"},
            ];
     regresar(){
        this.router.navigate(['/landing']);
    }

    enviardatos(){
        console.log("AQUI SE ENVIAN LOS DATOS PARA LA BD");
    }
    buscar(){
        
    }

}