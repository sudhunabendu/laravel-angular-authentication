import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form ={
    email:null,
    password:null
  };

  constructor(
    private auth:AuthService,
    private Token:TokenService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
// console.log(this.form)
    this.auth.login(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    )
  }

  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');

  }

  handleError(data:any){

  }

}
