import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogPostService } from './blog-post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostComponent implements OnInit {

  constructor(
    private _blogPostService: BlogPostService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(paramMap => {
      this.blogId = paramMap.get('id');
    })
    this.getBlogPost(this.blogId);

    
  }

  getBlogPost(id) {
    this._blogPostService.getBlogPost(id)
      .subscribe((result: any) => {
        let data = result.data.data.blog_posts.data[0];
        this.blogPost = data;
        this.isLoaded = true;
      })
  }


  blogId;
  isLoaded = false;

  blogPost;
}
