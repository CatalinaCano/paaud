import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HistoricoSolicitudesService {

    private obtener_solicitudesURL = 'http://localhost:8000/get_solicitud/';
    solicitudes = [];

    constructor(private http: Http) { }

    getSolicitudes(usuario:string,password:string){
        console.log(this.obtener_solicitudesURL+'?usuario='+usuario+'&password='+password);
        return this.http.get(this.obtener_solicitudesURL+'?usuario='+usuario+'&password='+password)
            .toPromise()
            .then(response => {
                response.json();
                this.solicitudes = response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error occurred', error);
        return Promise.reject(error._body || error);
    }

    getDatosSolicitudes() {
        return this.solicitudes;
    }
}