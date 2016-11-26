import { Injectable } from '@angular/core';
import { Perfil } from '../class/perfil';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PerfilService {
    private perfilUrl = 'https://cursoangularjs2restful.herokuapp.com/perfil';


    constructor(private http: Http) { }

    fetchAll(): Observable<Perfil[]> {

        return this.http.get(this.perfilUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}

