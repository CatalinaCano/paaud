import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginEstudianteService {

    private obtener_estudianteURL = 'http://localhost:8000/get_estudiante/';
    datos_usuario = {};

    constructor(private http: Http) { }

    getEstudiante(usuario:string, password:string){
        console.log(this.obtener_estudianteURL+'?usuario='+usuario+'&password='+password);
        return this.http.get(this.obtener_estudianteURL+'?usuario='+usuario+'&password='+password)
            .toPromise()
            .then(response => {
                response.json();
                this.datos_usuario = response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error occurred', error);
        return Promise.reject(error._body || error);
    }

    getDatosUsuario() {
        return this.datos_usuario;
    }
}