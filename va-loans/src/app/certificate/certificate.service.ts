import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CertificateService {

    constructor(
        private http: HttpClient
    ) { }

    getAllData() {
        return this.http.get(environment.serverUrl + '/qualify/cert');
    }

    sendCertForm(body) {
        console.log(body);
        return this.http.post(environment.serverUrl + '/qualify/cert-form', body);
    }
}