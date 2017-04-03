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
    
    volver(){
        this.router.navigate(['/landing']);
    }
}