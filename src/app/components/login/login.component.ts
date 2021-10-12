import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  public error = null;

  constructor(
    private auth:AuthService,
    private Token:TokenService,
    private router:Router,
    private Toaster:ToastrService
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
    this.Toaster.success("Login Success");
    this.router.navigateByUrl('/profile');

  }

  handleError(error:any){
    this.error = error.error.error;
    this.Toaster.error("Email Address or Password Doesn't Match");
    // this.auth.changeAuthStatus(false);
    // this.router.navigateByUrl('/login');
  }

}
