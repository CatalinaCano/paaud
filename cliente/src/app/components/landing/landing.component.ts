import { Component, OnInit } from '@angular/core';

import { LoginEstudianteService } from './../../services/login-estudiante.service';

@Component({
    moduleId: module.id,
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

     datos_usuario = {};

    constructor(
        private loginEstudianteService: LoginEstudianteService
    ) { }

    ngOnInit() { 
        this.datos_usuario = this.loginEstudianteService.getDatosUsuario();
        console.log(this.datos_usuario);
    }
}