import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Subscription } from "rxjs";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  errorSub : Subscription;
  loadedPosts = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {

    this.errorSub = this.postsService.error.subscribe((message)=>{
      this.error = message;
    })

    this.isFetching = true;
    this.postsService.fetchData().subscribe((posts)=> {
      this.loadedPosts = posts;
      this.isFetching = false;
    }, (error)=> {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStoreData(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchData().subscribe((posts)=> {
      this.loadedPosts = posts;
      this.isFetching = false;
    }, (error)=> {
      this.isFetching = false;
      this.error = error.message;
    });
    
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(()=> {
      this.loadedPosts = [];
    })
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  handleError(){
    this.error = null;
  }
}
