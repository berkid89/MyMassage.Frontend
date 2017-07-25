import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    private BASE_URL = "http://localhost:51073/api/v1";

    public LOGIN = `${this.BASE_URL}/account/login`;
}