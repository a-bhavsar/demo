import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval : NodeJS.Timer;
  @Output('numberEmitter') numberEmitter = new EventEmitter<number>(); 
  incNumber : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartClicked(){
    this.interval = setInterval(()=> {
      this.numberEmitter.emit(this.incNumber);
      this.incNumber++;
    }, 1000) 
  }

  onStopClicked(){
    clearInterval(this.interval);
  }

}
