import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SolicitudesService {

    private verify_solicitudURL = 'http://localhost:8000/verify_solicitud/';
    private post_solicitudURL = 'http://localhost:8000/post_solicitud/';
    private get_solicitudesURL = 'http://localhost:8000/get_solicitudes/';
    private get_solicitudcamposolicitudURL = 'http://localhost:8000/get_solicitudcamposolicitud/';
    private update_solicitudURL = 'http://localhost:8000/update_solicitud/';
    private datos_login = JSON.parse(sessionStorage.getItem('datos_login'));
    ultima_solicitud = {};

    constructor(private http: Http) { }

    getSolicitudes(): Observable<any> {
        return this.http
            .get(this.get_solicitudesURL+'?usuario='+this.datos_login.usuario+'&password='+this.datos_login.password)
            .map((res: Response) => {
                return res.json().datos || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    verifySolicitud(convocatoria: number): Observable<any> {
        return this.http
            .get(this.verify_solicitudURL+'?usuario='+this.datos_login.usuario+'&password='+this.datos_login.password+'&convocatoria='+convocatoria)
            .map((res: Response) => {
                return res.json() || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    postSolicitud(solicitud: Object): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.post_solicitudURL+'?usuario='+this.datos_login.usuario+'&password='+this.datos_login.password,solicitud,options)
            .map((res: Response) => {
                return res.json() || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    get_solicitudCampoSolicitud(solicitud: number): Observable<any>{
        return this.http
            .get(this.get_solicitudcamposolicitudURL+'?usuario='+this.datos_login.usuario+'&password='+this.datos_login.password+'&solicitud='+solicitud)
            .map((res: Response) => {
                return res.json().datos || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    updateSolicitud(valores: Object): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .put(this.update_solicitudURL+'?usuario='+this.datos_login.usuario+'&password='+this.datos_login.password,valores,options)
            .map((res: Response) => {
                return res.json() || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
    
}