import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../services/login.service';
import { HistoricoSolicitudesService } from './../../services/historico-solicitudes.service';

@Component({
    moduleId: module.id,
    selector: 'app-historico-solicitudes',
    templateUrl: 'historico-solicitudes.component.html'
})

export class HistoricoSolicitudesComponent implements OnInit {

    datos_usuario = {};
    solicitudes = [];

    constructor(
        private loginService: LoginService,
        private historicoSolicitudesService: HistoricoSolicitudesService
    ) { }

    ngOnInit() { 
        this.solicitudes = this.historicoSolicitudesService.getDatosSolicitudes();
        this.datos_usuario = this.loginService.getDatosUsuario();
    } 

    buscar(){
        
    }
}