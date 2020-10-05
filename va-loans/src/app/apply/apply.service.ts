import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApplyService {

    constructor(
        private http: HttpClient
    ) { }

    getAllData() {
        return this.http.get(environment.serverUrl + '/qualify/apply');
    }
}