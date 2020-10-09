import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import { auth } from 'firebase';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(!form.valid){
      return
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;


    this.isLoading = true;


    if(this.isLoginMode){
      authObs = this.authService.Login(email,password);
    
      //...
    }else{
      authObs = this.authService.signUp(email, password)
  
      //console.log(form.value);
      
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['/home'])


      },errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    )

    form.reset();
  }
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}





export class User {
    constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate: Date){}

    // get token(){

    //     if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
    //         return null;

    //     }

    //     return this._token

    // }
}
