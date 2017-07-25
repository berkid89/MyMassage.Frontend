import { Injectable } from '@angular/core';
import { ServiceBase } from './serviceBase';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Config } from '../services/config';

@Injectable()
export class UserService extends ServiceBase {
    public constructor(authHttp: AuthHttp, private http: Http, private config: Config) {
        super(authHttp);
    }

    public async login(userName: string, password: string) {
        let res = await this.http.post(this.config.LOGIN, {
            email: userName,
            password: password
        }).toPromise();

        return res;
    }
}