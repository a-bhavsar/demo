import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/logging.service';
import { AuthService } from './auth/auth.service';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : []
})
export class AppComponent implements OnInit {

  constructor(private authService : AuthService, private loggingService : LoggingService){

  }
  ngOnInit(){
    this.authService.autoLogin();
    this.loggingService.printLog("Hello from AppComponent ngOnInit")
  }
}
