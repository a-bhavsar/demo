import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "TestServer";
  username = "";
  usernamePresence = false;
  serverCreated = false;
  servers = ['Server 1', 'Server 2']
  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer(){
    this.serverCreationStatus = "Server was created! The name is" + this.serverName;
    this.servers.push(this.serverName)

  }

  onUpdateServerName(event: Event){
    this.serverCreated = true;
    console.log("hiiiiiiiiiiiiiiiiii");
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onchangeInput(event : Event){
    console.log("Hello");
    console.log((<HTMLInputElement>event.target).value);
    if(!(<HTMLInputElement>event.target).value){
      
      this.usernamePresence = false;
    }
    else{
      this.usernamePresence = true;
    }
  }
  resetUsername(){
    this.username = "";
  }
}
