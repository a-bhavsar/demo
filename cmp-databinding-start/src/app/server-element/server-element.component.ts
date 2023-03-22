import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element : {
    type : string,
    name : string,
    content : string
  }

  @Input() name : string;

  @ViewChild('heading', {static : true}) x : ElementRef;

  @ContentChild('paragraph', {static : true}) p : ElementRef; 


  constructor() { }

  ngOnInit(){
    console.log("ngOnInit called!");
    console.log(this.x.nativeElement.textContent);
    console.log(this.p.nativeElement.textContent);
  }

  ngOnChanges(changes : SimpleChanges){
    console.log(changes);
    console.log("ngOnChanges called");
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
    console.log(this.x.nativeElement.textContent);
    console.log(this.p.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(){
    console.log(this.x.nativeElement.textContent);
    console.log(this.p.nativeElement.textContent);
    console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("onDestroy called");
  }

}
