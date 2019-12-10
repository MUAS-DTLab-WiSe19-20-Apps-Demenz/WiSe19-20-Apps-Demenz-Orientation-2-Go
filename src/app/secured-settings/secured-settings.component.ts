import { Component, OnInit, Input } from '@angular/core';
import { SettingsAuthenticationService } from '../settings-authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secured-settings',
  templateUrl: './secured-settings.component.html',
  styleUrls: ['./secured-settings.component.css']
})
export class SecuredSettingsComponent implements OnInit {

  @Input() newPassword : string;

  constructor(private router : Router,
              private route: ActivatedRoute) {

   }

   changePassword(): void {
    this.router.navigate([`../changePassword`], { relativeTo: this.route});
  }

  changeHomeAdress(): void {
    this.router.navigate([`../changeHomeAdress`], { relativeTo: this.route});
  }

  changeRadius(): void {
    this.router.navigate([`../radius`], { relativeTo: this.route});
  }

  ngOnInit() {
    
  
  }

}
