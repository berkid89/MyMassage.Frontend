import { Injectable } from '@angular/core';
import { ServiceBase } from './serviceBase';
import { Http } from '@angular/http';

@Injectable()
export class UserService extends ServiceBase {
    constructor(http: Http){
        super(http);
        this.makeHttpRequest("", "", {}, () => {
            
        });
    }
}