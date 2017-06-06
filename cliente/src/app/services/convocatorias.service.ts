import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConvocatoriasService {

    private post_convocatoriaURL = 'http://localhost:8000/post_convocatoria/';
    private get_convocatoriasURL = 'http://localhost:8000/get_convocatorias/';
    private get_cuposconvocatoriaURL = 'http://localhost:8000/get_cuposconvocatoria/';
    private update_convocatoriaURL = 'http://localhost:8000/update_convocatoria/';
    private update_cuposconvocatoriaURL = 'http://localhost:8000/update_cuposconvocatoria/';
    private datos_usuario = JSON.parse(sessionStorage.getItem('datos_login'));

    constructor(private http: Http) { }

    postConvocatoria(convocatoria: Object): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.post_convocatoriaURL+'?usuario='+this.datos_usuario.usuario+'&password='+this.datos_usuario.password,convocatoria,options)
            .map((res: Response) => {
                return res.json() || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    getConvocatorias(): Observable<any> {
        return this.http
            .get(this.get_convocatoriasURL+'?usuario='+this.datos_usuario.usuario+'&password='+this.datos_usuario.password)
            .map((res: Response) => {
                return res.json().datos || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    getCuposConvocatoria(convocatoria: number): Observable<any> {
        return this.http
            .get(this.get_cuposconvocatoriaURL+'?usuario='+this.datos_usuario.usuario+'&password='+this.datos_usuario.password+'&convocatoria='+convocatoria)
            .map((res: Response) => {
                return res.json().datos || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    updateConvocatoria(convocatoria: Object): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .put(this.update_convocatoriaURL+'?usuario='+this.datos_usuario.usuario+'&password='+this.datos_usuario.password,convocatoria,options)
            .map((res: Response) => {
                return res.json() || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    updateCuposConvocatoria(cupos: Object): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .put(this.update_cuposconvocatoriaURL+'?usuario='+this.datos_usuario.usuario+'&password='+this.datos_usuario.password,cupos,options)
            .map((res: Response) => {
                return res.json() || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
    
}