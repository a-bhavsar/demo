import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm : FormGroup;
  forbiddenUserNames = ['Chris', 'Anna']

  ngOnInit(){
    this.signupForm = new FormGroup({
      userData : new FormGroup({
        username : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
      }),
      gender : new FormControl("male"),
      hobbies : new FormArray([])
    })
    this.signupForm.valueChanges.subscribe((value)=> console.log(value))
    this.signupForm.statusChanges.subscribe((status)=> console.log(status))
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  addHobby(){
    let control : FormControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControl(){
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control : FormControl) : { [s : string] : boolean}{
    
    if(this.forbiddenUserNames.indexOf(control.value)!==-1){
      return {"forbiddenName" : true};
    }
    return null;
  }

  forbiddenEmail(control : FormControl) : Promise<any> | Observable<any>{
    
    console.log("Hello");
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=> {
        if(control.value === "test@test.com"){
          resolve({"forbiddenEmail" : true});
        }
        else{
          resolve(null);
        }
      }, 1500)     
    });
    return promise;
  }

}
