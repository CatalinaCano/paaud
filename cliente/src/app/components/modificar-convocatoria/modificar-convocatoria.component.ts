import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginService } from './../../services/login.service';
import { FacultadesService } from './../../services/facultades.service';
import { CustomFormsModule } from 'ng2-validation';


@Component({
    moduleId: module.id,
    selector: 'modificar-convocatoria',
    templateUrl: 'modificar-convocatoria.component.html'
})

export class ModificarConvocatoriaComponent implements OnInit {

public modificar: boolean;
    constructor(
        private loginService: LoginService,
        private facultadesService: FacultadesService,
        private router: Router,
        ) {
            this.modificar = false;
        }

    ngOnInit() {}
      convocatorias =[
         {
            "f_inicio": "01/02/2017",
            "f_fin":"20/03/2017",
            "k_idfacultad":"Ingeniería"
        },
        {
            "f_inicio": "21/04/2017",
            "f_fin":"05/05/2017",
            "k_idfacultad":"Artes"
        },
        {
            "f_inicio": "07/05/2017",
            "f_fin":"12/05/2017",
            "k_idfacultad":"Macarena"
        },
    ];
}