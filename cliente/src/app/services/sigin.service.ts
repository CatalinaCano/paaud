import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SiginService {

    private siginURL = 'http://localhost:8000/sigin/';

    constructor(private http: Http) { }

    sigin(usuario:string, password:string): Observable<any>{
        return this.http
            .get(this.siginURL+'?usuario='+usuario+'&password='+password)
            .map((res: Response) => {
                return res.json() || {};
            })
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

}