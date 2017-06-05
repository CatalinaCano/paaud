import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    private loginURL = 'http://localhost:8000/login/';
    public datos_usuario = {};
    public datos_login = {};

    constructor(
        private http: Http,
        private router: Router
    ) {}

    login(usuario:string, password:string): Observable<any>{
        return this.http
            .get(this.loginURL+'?usuario='+usuario+'&password='+password)
            .map((res: Response) => {
                let datos_login = {
                    "usuario" : usuario,
                    "password" : password
                }
                //guardamos los datos de inicio de sesión y del usuario en sessionStorage
                sessionStorage.setItem('datos_usuario',JSON.stringify(res.json()));
                sessionStorage.setItem('datos_login',JSON.stringify(datos_login));
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    getDatosUsuario(): Object {
        return JSON.parse(sessionStorage.getItem('datos_usuario'));
    }

    getDatosLogin(): Object {
        return JSON.parse(sessionStorage.getItem('datos_login'));
    }
}