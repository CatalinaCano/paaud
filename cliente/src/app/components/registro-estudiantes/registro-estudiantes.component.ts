import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FacultadesService } from './../../services/facultades.service';

@Component({
    moduleId: module.id,
    selector: 'registro-estudiantes',
    templateUrl: 'registro-estudiantes.component.html'
})

export class RegistroEstudiantesComponent implements OnInit {
    facultades = [];
    constructor(
       // private facultadesService: FacultadesService,
        private router: Router
    ) { }
    
   
    ngOnInit() { 
         //this.facultades = this.facultadesService.getDatosFacultades();
    }   

  proyectos=[
        {"n_proyecto":"Ingeniería de Sistemas"},
        {"n_proyecto":"Licenciatura en Biología"},
        {"n_proyecto":"Arte Escenico"}
    ];
    regresar(){
        console.log('llego Aqui');
        this.router.navigate(['/login']);
    }

    enviardatos(){
        console.log("AQUI SE ENVIAN LOS DATOS PARA LA BD");
    }
}