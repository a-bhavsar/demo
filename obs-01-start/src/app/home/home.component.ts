import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  firstObsSubscription : Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count)=> {
    //   console.log(count);
    // })

    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=> {
        observer.next(count);
        if(count===3){
          observer.complete();
        }
        if(count > 3){
          observer.error(new Error("Hehe"))
        }
        count++;
      }, 1000);
    })

    this.firstObsSubscription = customObservable.pipe(filter((data)=>{
      return data > 1;
    }), map((data : number)=> {
      return "Result " + (data+1);
    })).subscribe((data : number)=> {
      console.log(data);
    }, error => {
      alert(error);
    }, () => {
      console.log("Completed!");
    });

    

  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }


}
