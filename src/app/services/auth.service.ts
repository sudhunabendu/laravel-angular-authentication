import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject <boolean> (this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();


  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http:HttpClient,
    private Token:TokenService,
    
  ) { }

  login(data:any){
    console.log("i am server");
    return this.http.post(`${baseUrl}login`,data);
  }

  changeAuthStatus(value:boolean){
    this.loggedIn.next(value)
  }

  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
}
