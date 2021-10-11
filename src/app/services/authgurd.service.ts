import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgurdService {

  constructor(
    public auth:AuthService,
    private alertService: NotificationService,
    public router: Router
  ) { }

  
}
