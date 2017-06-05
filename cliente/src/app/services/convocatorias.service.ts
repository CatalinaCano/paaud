import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ConvocatoriasService {

    private post_convocatoriaURL = 'http://localhost:8000/post_convocatoria/';
    private datos_usuario = JSON.parse(sessionStorage.getItem('datos_login'));

    constructor(private http: Http) { }

    postConvocatoria(convocatoria: Object): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.post_convocatoriaURL+'?usuario='+this.datos_usuario.usuario+'&password='+this.datos_usuario.password,convocatoria,options)
            .map((res: Response) => {
                console.log(res);
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
    
}