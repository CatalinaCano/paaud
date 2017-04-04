import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { RegistrarSolicitudService } from './../../services/registrar-solicitud.service';

@Component({
    moduleId: module.id,
    selector: 'app-confirmacion-solicitud',
    templateUrl: 'confirmacion-solicitud.component.html'
})

export class ConfirmacionSolicitudComponent implements OnInit {

    valor_ultima_solicitud = null;

    constructor(
        private registrarSolicitudService: RegistrarSolicitudService,
        private router: Router
    ) { }

    ngOnInit() { 
        this.valor_ultima_solicitud = this.registrarSolicitudService.getValorUltimaSolicitud();
    }

    volver(){
        this.router.navigate(['/landing']);
    }
}