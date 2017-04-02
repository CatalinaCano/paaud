import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-pulicar-convocatoria',
    templateUrl: 'publicar-convocatoria.component.html'
})

export class PublicarConvocatoriaComponent implements OnInit {
    constructor() { }
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
}