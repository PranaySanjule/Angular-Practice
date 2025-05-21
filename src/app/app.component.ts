import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccessManagementComponent } from './access-management3/access-management.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, SignupComponent, AccessManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  handleClickEvent() {
    alert('Button clicked!');
  }
  

  // properties
  name: string = "Pranay Sanjule";
  age: number = 23;
  isActive: boolean = true;

  para: string | number | boolean = "This is a paragraph"; //string | number | boolean
  
  p:any = 1000; //any type


  //or

  title = 'Angular Learning';
  version = "Angular 19";
  num1 = 10;
  num2 = 54;
  str = "pranay sanjule";


  updateName() {
    this.name = "Sanjule Pranay";
    this.isActive = false;
    this.para = 1000;
    this.p = false;


    // variable
    let a = 10;
    let gender = "male";
    let isActive = true;
  }

  updateVar() {
    let x:string = "HellO World!";
    let y: number = 1000;
    
    let a = 24;
    let b = 7;
  }
}
