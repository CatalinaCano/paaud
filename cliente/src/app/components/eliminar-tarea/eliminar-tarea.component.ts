import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'eliminar-tarea',
    templateUrl: 'eliminar-tarea.component.html'
})

export class EliminarTareaComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }
  
     regresar(){
        this.router.navigate(['/landing']);
    }

    enviardatos(){
        console.log("AQUI SE ENVIAN LOS DATOS PARA LA BD");
    }
    buscar(){
        
    }

}