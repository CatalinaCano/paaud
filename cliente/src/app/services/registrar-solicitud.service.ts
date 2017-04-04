import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrarSolicitudService {

    private post_solicitudURL = 'http://localhost:8000/post_solicitud/';
    private get_ultimasolicitudURL = 'http://localhost:8000/get_ultimasolicitud/';
    private post_camponumericoURL = 'http://localhost:8000/post_camponumerico/';
    ultima_solicitud = {};

    constructor(private http: Http) { }

    postSolicitud(solicitud: Object): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.post_solicitudURL,solicitud,options)
             .toPromise()
             .then(response => {
                 console.log(response)
                })
             .catch(this.handleError);
    }

    getUltimaSolicitud(usuario:string, password:string) : Promise<any> {
        return this.http.get(this.get_ultimasolicitudURL+'?usuario='+usuario+'&password='+password)
            .toPromise()
            .then(response => {
                response.json();
                this.ultima_solicitud = response.json();
            })
            .catch(this.handleError);
    }

    postSolicitudCampo(usuario:string, password:string, solicitud:string, campo:string, valor:string, url:string): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let arreglo = {
            "usuario": usuario,
            "password": password,
            "solicitud": solicitud,
            "campo": campo,
            "valor": valor
        }

        return this.http.post(url,arreglo,options)
             .toPromise()
             .then(response => {
                 console.log(response)
                })
             .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error occurred', error);
        return Promise.reject(error._body || error);
    }

    getValorUltimaSolicitud(){
        return this.ultima_solicitud;
    }
}