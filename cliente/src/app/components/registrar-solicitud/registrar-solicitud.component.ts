import { Component, OnInit } from '@angular/core';

import { LoginEstudianteService } from './../../services/login-estudiante.service';

@Component({
    moduleId: module.id,
    selector: 'app-registrar-solicitud',
    templateUrl: 'registrar-solicitud.component.html'
})

export class RegistrarSolicitudComponent implements OnInit {

    datos_usuario = {};

    constructor(
        private loginEstudianteService: LoginEstudianteService
    ) { }

    ngOnInit() {
        this.datos_usuario = this.loginEstudianteService.getDatosUsuario();
        console.log(this.datos_usuario);
     }

}