import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../../services/login.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    constructor(
        private router: Router,
        private loginService: LoginService
    ) {}

    ngOnInit() { }

    credenciales={
        "nombre":"",
        "password":""
    };

    error="";

    ingresar(){
        this.loginService
            .getEstudiante(this.credenciales.nombre,this.credenciales.password)
            .then(data => {
                this.router.navigate(['/landing']);
            })
            .catch( error => {
                this.error = error;
                console.log("Error: "+error)
            })
    }

    login(){
        this.loginService
            .login(this.credenciales.nombre,this.credenciales.password)
            .then(data => {
                this.router.navigate(['/landing']);
            })
            .catch( error => {
                this.error = error;
                console.log("Error: "+error)
            })
    }

    registrarse(){
        this.router.navigate(['/registro-estudiantes']);
    }
}