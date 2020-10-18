import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LandingService {

    constructor(
        private http: HttpClient
    ) { }

    getAllData() {
        return this.http.get(environment.serverUrl + '/home');
    }

    sendContactForm(body) {
        console.log(body);
        return this.http.post(environment.serverUrl + '/contact-form', body);
    }
}