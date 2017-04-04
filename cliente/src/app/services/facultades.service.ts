import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FacultadesService {

    private obtener_facultadesURL = 'http://localhost:8000/get_facultades/';
    facultades = [];

    constructor(private http: Http) { }

    getFacultades(usuario:string,password:string){
        return this.http.get(this.obtener_facultadesURL+'?usuario='+usuario+'&password='+password)
            .toPromise()
            .then(response => {
                response.json();
                this.facultades = response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error occurred', error);
        return Promise.reject(error._body || error);
    }

    getDatosFacultades() {
        return this.facultades;
    }
}