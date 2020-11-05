import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class NavigationService {

    constructor(
        private http: HttpClient
    ) { }

    sendNewsletter(body) {
        return this.http.post(environment.serverUrl + '/newsletter', body);
    }
}