import { Component, OnInit, Input } from '@angular/core';
import { SettingsAuthenticationService } from '../settings-authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  @Input() newPassword : string;
  

  constructor(private securedsetting: SettingsAuthenticationService,
              private location : Location) {

   }

   setNewPassword(): void {
      this.securedsetting.setPassword(this.newPassword);
      localStorage.clear();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.securedsetting.getPassword().subscribe(t => this.newPassword = t);
  
  }

}
