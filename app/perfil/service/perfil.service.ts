import { Injectable } from '@angular/core';
import { Perfil } from '../class/perfil';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
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

    get(id: string): Observable<Perfil> {
        return this.http.get(this.perfilUrl + "/" + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    //método para salvar o Perfil
    salvar(perfil: Perfil): Observable<Perfil> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!perfil._id) {
            return this.http.post(this.perfilUrl, perfil, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.perfilUrl + "/" + perfil._id, perfil, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }

    deletar(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.perfilUrl + "/" + id, options);
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

