import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { GoogleAnalyticsService } from '../google-analytics.service';

 
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(
    private _blogService: BlogService,
    private _googleAnalyticsService: GoogleAnalyticsService
  ) { }

  ngOnInit(): void {
    this.getAllPageData();
    this.getAllPosts(this.pagination);
  }

  onScroll() {
    if(this.totalCount === this.postsNestedArr.length) {
      return;
    }
    this.pagination++;
    if(this.isFiltered) {
      this.getAllPostsWithFilter(this.pagination, this.searchInput);
    } else {
      this.getAllPosts(this.pagination);
    }
  }

  search() {
    this.isLoadedPosts = false;
    this.postsNestedArr.length = 0;
    this.postsNestedArr = [[]];
    this.pagination = 1;
    if(this.searchInput.length === 0) {
      this.isFiltered = false;
      this.getAllPosts(this.pagination);
    } else {
      this.isFiltered = true;
      this.getAllPostsWithFilter(this.pagination, this.searchInput);
      this._googleAnalyticsService.eventEmitter("blog_search_request", "search", this.searchInput);
    }
  }

  getAllPageData() {
    this._blogService.getAllPageData()
      .subscribe((result: any) => {
        let data = result.data.data.blog_page.data[0];
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.img = data.image.full_url;
        this.isLoaded = true;
      })
  }

  getAllPosts(pagination) {
    this._blogService.getAllBlogPosts(pagination)
      .subscribe((result: any) => {
        let data = result.data.data.blog_posts.data;
        let meta = result.data.data.blog_posts.meta;
        this.posts = data;
        this.totalCount = meta.total_count;
        let j = 0;
        if(this.postsNestedArr[0].length != 1) {
          j = this.postsNestedArr.length -1;
        }
        
        for(let i = 0; i < this.posts.length; i++) {
          if(i !== 0 && i % 2 == 0) {
            this.postsNestedArr.push([]);
            j++;
          }
          this.postsNestedArr[j].push(this.posts[i]);
        }
        this.isLoadedPosts = true;
      })
  }

  getAllPostsWithFilter(pagination, filter) {
    this._blogService.getAllBlogPostsWithFilter(pagination, filter)
      .subscribe((result: any) => {
        // if(result.data.data.blog_posts)
        let data = result.data.data.blog_posts.data;
        let meta = result.data.data.blog_posts.meta;
        this.posts = data;
        this.totalCount = meta.total_count;
        let j = 0;
        if(this.postsNestedArr[0].length != 1) {
          j = this.postsNestedArr.length - 1;
        }
        for(let i = 0; i < this.posts.length; i++) {
          if(i !== 0 && i % 2 == 0) {
            this.postsNestedArr.push([]);
            j++;
          }
          this.postsNestedArr[j].push(this.posts[i]);
        }
        this.isLoadedPosts = true;
      })
  }

  totalCount: Number;
  pagination = 1;
  isLoaded = false;
  isLoadedPosts = false;
  searchInput: string = "";
  isFiltered = false;

  title = "VA Loans Blog";
  subtitle = "Benefit news, VA Loan tips, and  personal finance help";
  img = "/assets/images/5.jpg";

  posts = [];

  postsNestedArr = [[]];



}
