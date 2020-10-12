import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BlogPostService {

    constructor(
        private http: HttpClient
    ) { }

    getBlogPost(id) {
        return this.http.get(environment.serverUrl + `/blog-post?id=${id}`);
    }
}