import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError, BehaviorSubject, Subject, from } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { User } from './user.model';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    LocalId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService{

    user = new BehaviorSubject<User>(null);

    

    //token: string = null;

constructor(private http: HttpClient, private router: Router){}

 signUp(email:string, password: string){
    return this.http
    .post<AuthResponseData>("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB1CH4tZsw3AluVQlPLkBK0ekBjTTuw43I",
    {
        email: email,
        password: password,
        returnSecureToken: true
    }
  )

  .pipe(
      catchError(this.handleError),
      tap(resData => {
          this.handleAuthentication(
              resData.email,
              resData.LocalId,
              resData.idToken,
              +resData.expiresIn
          );
      })
    );
  }


  Login(email:string, password: string){
    return this.http.post<AuthResponseData>("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB1CH4tZsw3AluVQlPLkBK0ekBjTTuw43I",
    {
        email:email,
        password:password,
        returnSecureToken: true
    })
    .pipe(
        catchError(this.handleError),
        tap(resData => {
            this.handleAuthentication(
                resData.email,
                resData.LocalId,
                resData.idToken,
                +resData.expiresIn
            );
        })
    )
  }

  logout(){
      this.user.next(null);
      this.router.navigate(['/login']);
  }

  handleAuthentication(
      email: string,
      userId: string,
      token: string,
      expiresIn: number
  ){
      const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000);


      const user = new User(email, userId, token, expirationDate);
      this.user.next(user);
  };

  private handleError(errorRes: HttpErrorResponse) {
      let errorMessage = "An unknown error";
      if(!errorRes.error || !errorRes.error.error){
          return throwError(errorMessage);
      }
      switch (errorRes.error.error.message){
          case 'EMAIL_EXISTS':
              errorMessage = 'This email already exists';
              break;
     
          case 'EMAIL_EXISTS':
              errorMessage = 'This email already exists';
               break;
               
          case 'EMAIL_EXISTS':
              errorMessage = 'This email already exists';
              break;

      }

      return throwError(errorMessage)
      
      
  }



}
