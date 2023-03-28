import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { Post } from "./post.model";

@Injectable({ providedIn: "root" })
export class PostsService {

  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStoreData(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post(
        "https://ng-complete-guide-3e3bb-default-rtdb.firebaseio.com/post.json",
        postData,
        {
            observe : 'events'
        }
      )
      .subscribe((response) => {
        console.log(response);
      }, error=> {
        this.error.next(error.message);
      });
  }

  fetchData() {
    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-complete-guide-3e3bb-default-rtdb.firebaseio.com/post.json",
        {
            headers : new HttpHeaders({
                "Custom-Header" : "hehe"
            }),
            params : new HttpParams().set("print", "pretty")
        }
      )
      .pipe(
        map((data) => {
          const postsArray = [];
          for (let key in data) {
            postsArray.push({ ...data[key], _id: key });
          }
          return postsArray;
        })
      );
  }

  deletePosts(){
    return this.http.delete("https://ng-complete-guide-3e3bb-default-rtdb.firebaseio.com/post.json");
  }
}
