import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../../services/login.service';
import { SiginService } from './../../services/sigin.service';

import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    constructor(
        private router: Router,
        private loginService: LoginService,
        private siginService: SiginService
    ) {}

    ngOnInit() { }

    credenciales={
        "nombre":"",
        "password":"",
        "confirmpassword":""
    };

    error='';
    confirm_user_created = false;

    sigin = false;

    login(): void{
        this.loginService.login(this.credenciales.nombre,this.credenciales.password)
            .subscribe(data => this.router.navigate(['/landing']),
                   err => {
                        this.error = err._body;
                        console.log(this.error);
                    });
    }

    sigIn(): void {

        this.error = '';

        if (this.credenciales.password === this.credenciales.confirmpassword){
            this.siginService.sigin(this.credenciales.nombre,this.credenciales.password)
                .subscribe(res => {
                        let respuesta = res;
                        console.log(respuesta);
                        if (respuesta.respuesta){
                            this.changeState();
                            this.confirm_user_created = true;
                        } else {
                            this.error = 'El estudiante no existe';
                        }
                    }, err => {
                        this.error = err._body;
                        console.log(this.error);
                    });
        } else {
            this.error = 'Las contraseñas no coinciden';
        }
    }

    changeState(): void{
        this.cleanErrors();
        this.sigin = !this.sigin;
    }

    cleanErrors(): void{
        this.error='';
        this.confirm_user_created = false;
    }

}