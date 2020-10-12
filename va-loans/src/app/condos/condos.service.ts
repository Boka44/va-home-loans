import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CondosService {

    constructor(
        private http: HttpClient
    ) { }

    getAllPageData() {
        return this.http.get(environment.serverUrl + '/condo-page');
    }

    getAllCondos(pagination) {
        return this.http.get(environment.serverUrl + `/condos?pagination=${pagination}`);
    }

    getAllCondosWithFilters(pagination, filter, filterBy) {
        return this.http.get(environment.serverUrl + `/condos-filtered?pagination=${pagination}&filter=${filter}&filterBy=${filterBy}`);
    }


}