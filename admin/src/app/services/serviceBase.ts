import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UNAUTHORIZED, INTERNAL_SERVER_ERROR } from 'http-status-codes';

@Injectable()
export class ServiceBase {
    constructor(private http: Http) { }

    public async makeHttpRequest(method: string, url: string, body: any, handleUnauthorized: Function, handleError: Function) {
        let res;

        switch (method) {
            case 'GET': {
                res = await this.http.get(url).toPromise();
            }
            case 'POST': {
                res = await this.http.post(url, body).toPromise();
            }
        }

        if (res.status == UNAUTHORIZED)
            handleUnauthorized();

        if (res.status == INTERNAL_SERVER_ERROR)
            handleError();

        return res.json();
    }
}