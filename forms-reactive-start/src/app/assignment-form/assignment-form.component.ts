import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  projectForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      // projectName : new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
      projectName : new FormControl(null, [Validators.required], this.forbiddenName),
      email : new FormControl(null, [Validators.required, Validators.email]),
      projectStatus : new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.projectForm);
  }

  forbiddenName(control : FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=> {
      if(control.value==="Test"){
        resolve({nameIsForbidden : true})
      }
      else{
        resolve(null)
      }
    })
    return promise;
  }

}
