import { Component, OnInit, Input } from '@angular/core';
import { SettingsAuthenticationService } from '../settings-authentication.service';

@Component({
  selector: 'app-secured-settings',
  templateUrl: './secured-settings.component.html',
  styleUrls: ['./secured-settings.component.css']
})
export class SecuredSettingsComponent implements OnInit {

  @Input() newPassword : string;

  constructor(private securedsetting: SettingsAuthenticationService) {

   }

   setNewPassword(): void {
      this.securedsetting.setPassword(this.newPassword);
      //this.tmp = this.securedsetting.getPassword();
  }

  ngOnInit() {
    this.securedsetting.getPassword().subscribe(t => this.newPassword = t);
    //this.securedsetting.setPassword("4444");
    //this.newPassword = this.securedsetting.getPassword();
  }

}
