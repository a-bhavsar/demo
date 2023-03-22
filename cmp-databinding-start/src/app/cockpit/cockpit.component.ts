import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit{
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  @Output('sCreated') serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName : string, blueprintContent : string}>();;

  constructor(){

  }
  
  ngOnInit(){
    
  }
  onAddServer(serverName : HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({serverName : serverName.value, serverContent : this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(blueprintName : HTMLInputElement) {
    this.blueprintCreated.emit({blueprintName : blueprintName.value, blueprintContent : this.serverContentInput.nativeElement.value})
  }
}
