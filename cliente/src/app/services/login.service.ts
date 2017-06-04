import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private loginURL = 'http://localhost:8000/login/';
    public datos_usuario = {};

    constructor(
        private http: Http,
        private router: Router
    ) {}

    login(usuario:string, password:string): Observable<any>{
        return this.http
            .get(this.loginURL+'?usuario='+usuario+'&password='+password)
            .map((res: Response) => {
                //guardamos las variables de inicio de sesión en sessionStorage
                let datos_usuario = JSON.stringify(res.json());
                sessionStorage.setItem('datos_usuario',datos_usuario);
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    getDatosUsuario(): Object {
        this.datos_usuario = JSON.parse(sessionStorage.getItem('datos_usuario'));
        return this.datos_usuario;
    }
}