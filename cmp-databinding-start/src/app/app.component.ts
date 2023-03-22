import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  oddNumbers : NodeJS.Timer[] = [];
  evenNumbers : NodeJS.Timer[] = [];

  serverElements = [{type : 'server', name : 'Testserver', content : 'Just a test'}];
  onServerAdded(serverData : {serverName : string, serverContent : string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData : {blueprintName : string, blueprintContent : string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name='Changed!'; 
  }


  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

  fireInterval(interval:NodeJS.Timer){

    if((Number(interval)) % 2!==0){
      this.oddNumbers.push(interval);
    }
    else{
      this.evenNumbers.push(interval);
    }
    
  }
  
}
