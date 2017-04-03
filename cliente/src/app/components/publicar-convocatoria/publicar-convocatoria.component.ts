import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-pulicar-convocatoria',
    templateUrl: 'publicar-convocatoria.component.html'
})

export class PublicarConvocatoriaComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() { }
    //Array del tipo de Subsidios
    subsidios =[
        {
            "n_tiposubsidio": "Total",
            "t_porcentajesub":"100",
        },
         {
            "n_tiposubsidio": "Tipo A",
            "t_porcentajesub":"70",
        },
         {
            "n_tiposubsidio": "Tipo B",
            "t_porcentajesub":"40",
        }
    ];

    facultades =[
        {
            "k_idfacultad": 1,
            "n_nombrefacultad":"Ingenieria",
        },
         {
            "k_idfacultad": 2,
            "n_nombrefacultad":"Artes",
        },
         {
            "k_idfacultad": 3,
            "n_nombrefacultad":"Maca",
        }
    ];

    facultad="";
    fechaInicio="";
    fechaFin="";
    cupos="";

    regresar(){
        this.router.navigate(['/landing']);
    }

    enviardatos(){
        console.log("AQUI SE ENVIAN LOS DATOS PARA LA BD");
    }


}