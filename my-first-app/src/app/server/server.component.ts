import { Component } from "@angular/core";

@Component({
    selector :'app-server',
    templateUrl : './server.component.html',
    styleUrls : ["./server.component.css"]
    
})

export class ServerComponent{
    serverStatus : string;
    displayParagraph : boolean = false;
    count : number = 0;
    countArray : number[] = [];
    constructor(){
        if(Math.random() > 0.5){
            this.serverStatus = "offline"
        }
        else{
            this.serverStatus = "online";
        }
    }
    getColor(){
        if(this.serverStatus==="online"){
            return "green";
        }
        else{
            return "red";
        }
    }
    changeFlag(){
        this.displayParagraph = !this.displayParagraph;
        this.count++;
        this.countArray.push(this.count);
    }
    checkCount(){
        if(this.count>5){
            return true;
        }
        else{
            return false;
        }
    }
    changeBackground(){
        if(this.count>5){
            return 'blue';
        }
        else{
            return 'white';
        }
    }
}