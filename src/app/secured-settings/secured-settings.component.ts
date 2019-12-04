import { Component, OnInit } from '@angular/core';
import { SettingsAuthenticationService } from '../settings-authentication.service';

@Component({
  selector: 'app-secured-settings',
  templateUrl: './secured-settings.component.html',
  styleUrls: ['./secured-settings.component.css']
})
export class SecuredSettingsComponent implements OnInit {

  newPassword: string = "1234";
  tmp: string;

  constructor(private securedsetting: SettingsAuthenticationService) {

   }

   setNewPassword(): void {
      this.securedsetting.setPassword(this.newPassword);
      this.tmp = this.securedsetting.getPassword();
  }

  ngOnInit() {
  }

}
