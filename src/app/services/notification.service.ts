import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastr:ToastrService
  ) { }

  successAlert(message:any){
    this.toastr.success(message,'Success')
  }

  errorAlert(message:any){
    this.toastr.success(message,'Error')
  }
}
