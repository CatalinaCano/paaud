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
    constructor(
        private loginService: LoginService,
        private facultadesService: FacultadesService,
        private router: Router,
        ) { }

    ngOnInit() {
    }
}