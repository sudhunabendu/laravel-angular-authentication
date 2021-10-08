import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject <boolean> (this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  constructor(
    private http:HttpClient,
    private Token:TokenService
  ) { }

  login(data:any){
    console.log("i am server");
    return this.http.post(`${baseUrl}login`,data);
  }

  changeAuthStatus(value:boolean){
    
  }
}
