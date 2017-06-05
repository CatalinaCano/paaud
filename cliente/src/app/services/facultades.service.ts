import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FacultadesService {

    private obtener_facultadesURL = 'http://localhost:8000/get_facultades/';
    private datos_usuario = JSON.parse(sessionStorage.getItem('datos_login'));

    constructor(
        private http: Http   
    ) {}

    getFacultades(): Observable<any> {
        return this.http
            .get(this.obtener_facultadesURL+'?usuario='+this.datos_usuario.usuario+'&password='+this.datos_usuario.password)
            .map((res: Response) => {
                return res.json().datos || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error')); 
    }

}