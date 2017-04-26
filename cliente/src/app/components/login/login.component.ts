import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginEstudianteService } from './../../services/login-estudiante.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    constructor(
        private router: Router,
        private loginEstudianteService: LoginEstudianteService
    ) {}

    ngOnInit() { }

    credenciales={
        "nombre":"",
        "contrasenia":""
    };

    error="";

    ingresar(){
        this.loginEstudianteService
            .getEstudiante(this.credenciales.nombre,this.credenciales.contrasenia)
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