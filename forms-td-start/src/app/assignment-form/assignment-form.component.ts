import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  user = {
    username : '',
    subscription : '',
    password : ''
  }
  submitted = false;

  @ViewChild('f') form : NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
    this.submitted = true;
    this.user.username = this.form.value.username;
    this.user.subscription = this.form.value.subscription;
    this.user.password = this.form.value.password;
  }

}
