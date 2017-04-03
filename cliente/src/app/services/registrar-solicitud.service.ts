import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RegistrarSolicitudService {

    private post_solicitudURL = 'http://localhost:8000/post_solicitud/';

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

    private handleError(error: any) {
        console.log('An error occurred', error);
        return Promise.reject(error._body || error);
    }
}