import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { UNAUTHORIZED, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ServiceBase {
    public constructor(private authHttp: AuthHttp) { }

    public async makeHttpRequest(method: string, url: string, body: any, handleUnauthorized: Function, handleError: Function) {
        let res;

        switch (method) {
            case 'GET': {
                res = await this.authHttp.get(url).toPromise();
            }
            case 'POST': {
                res = await this.authHttp.post(url, body).toPromise();
            }
        }

        if (res.status == UNAUTHORIZED)
            handleUnauthorized();

        if (res.status == INTERNAL_SERVER_ERROR)
            handleError();

        return res.json();
    }
}