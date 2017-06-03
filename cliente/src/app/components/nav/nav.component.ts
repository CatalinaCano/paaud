import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { LoginService } from './../../services/login.service';
import { HistoricoSolicitudesService } from './../../services/historico-solicitudes.service';
import { FacultadesService } from './../../services/facultades.service';

@Component({
    moduleId: module.id,
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

    datos_usuario = {};

    constructor(
        private loginService: LoginService,
        private historicoSolicitudesService: HistoricoSolicitudesService,
        private facultadesService: FacultadesService,
        private router: Router
    ) { }

    ngOnInit() { 
        this.datos_usuario = this.loginService.getDatosUsuario();
    }

    consultarSolicitudes(usuario:string,password:string) {
        this.historicoSolicitudesService.getSolicitudes(usuario,password)
            .then(data => {
                this.router.navigate(['/ver-historico-solicitudes']);
            });
    }

    consultarFacultades(usuario:string,password:string) {
        this.facultadesService.getFacultades(usuario,password)
            .then(data => {
                this.router.navigate(['/publicar-convocatoria']);
            });
    }

    logOut(): void {
        sessionStorage.removeItem('datos_usuario');
        this.router.navigate(['/login']);
    }
}