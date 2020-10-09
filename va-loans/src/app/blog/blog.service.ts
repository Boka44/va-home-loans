import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BlogService {

    constructor(
        private http: HttpClient
    ) { }

    getAllPageData() {
        return this.http.get(environment.serverUrl + '/blog-page');
    }

    getAllBlogPosts(pagination) {
        return this.http.get(environment.serverUrl + `/blog-posts?pagination=${pagination}`);
    }
}