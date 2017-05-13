import { Component, OnInit } from '@angular/core';

import { LoginService } from './../../services/login.service';

@Component({
    moduleId: module.id,
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

     datos_usuario = {};

    constructor(
        private loginService: LoginService
    ) { }

    ngOnInit() { 
        this.datos_usuario = this.loginService.getDatosUsuario();
        console.log(this.datos_usuario);
    }
}