import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn :boolean= false;
 constructor(
    private auth:AuthService,
    private Token:TokenService,
    private Router:Router,
    private AlertService: ToastrService
  ) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value =>this.loggedIn = value);
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.auth.changeAuthStatus(false);
    this.AlertService.info("Logout Success");
    this.Router.navigateByUrl('/login');
  }

}
