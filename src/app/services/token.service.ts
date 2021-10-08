import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login : 'http://localhost:8000/api/auth/login',
    register : 'http://localhost:8000/api/auth/register'
  };

  constructor() { }

  handle(toekn:any){
    this.set(toekn)
  }

  set(token:any){
    localStorage.setItem('token',token)
  }

  get(){
    return localStorage.getItem('token')
  }

  remove(){
    localStorage.removeItem('token')
  }

  loggedIn(){
    return this.isValid();
  }

  isValid(){
    const token = this.get();
    if(token){
      const payload = this.payload(token);
      if(payload){
       return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token:any){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }


  decode(payload:any){
    return JSON.parse(atob(payload));
  }
  
}
