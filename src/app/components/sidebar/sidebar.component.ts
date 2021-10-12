import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public loggedIn :boolean= false;

  constructor(
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value =>this.loggedIn = value);
  }

}
