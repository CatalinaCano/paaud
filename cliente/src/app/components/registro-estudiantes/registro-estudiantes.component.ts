import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FacultadesService } from './../../services/facultades.service';

@Component({
    moduleId: module.id,
    selector: 'registro-estudiantes',
    templateUrl: 'registro-estudiantes.component.html'
})

export class RegistroEstudiantesComponent implements OnInit {
    
    constructor(
       // private facultadesService: FacultadesService,
        private router: Router
    ) { }
    
   
    ngOnInit() { 
         //this.facultades = this.facultadesService.getDatosFacultades();
    }
     facultades=[
        {"n_facultad":"Ingeniería"},
        {"n_facultad":"Tecnologíca"},
        {"n_facultad":"Artes"}
    ];

    estados=[
        {"n_estado":"Activo"},
        {"n_estado":"En Vaciones"},
        {"n_estado":"En prueba academica"}        
    ];
      

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

    onChange(fac) {
           console.log(fac);         
            if (fac==="1: Ingeniería"){
             for(var i=0;i<this.proyectos.length;i++){
                 console.log(this.proyectos[i].n_proyecto);
                document.getElementById("proyecto").innerHTML = "<option>"+ this.proyectos[i].n_proyecto +"</option>";             
                }                            
            }     
    }
}