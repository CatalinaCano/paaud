import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'inscribir-convocatoria',
    templateUrl: 'inscribir-convocatoria.component.html'
})

export class InscribirConvocatoriaComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
    
      convocatorias =[
         {
            "f_inicio": "01/02/2017",
            "f_fin":"20/03/2017",
            "k_idfacultad":"Ingeniería"
        }
    ];
    volver(){
        this.router.navigate(['/landing']);
    }

    registrarse(){
        this.router.navigate(['/registrar-solicitud']);
    }
}