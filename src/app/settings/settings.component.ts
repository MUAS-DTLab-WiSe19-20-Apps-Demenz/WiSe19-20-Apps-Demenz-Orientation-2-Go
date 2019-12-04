import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsAuthenticationService } from '../settings-authentication.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  userInput: string = "1111";

  constructor(private settingsauthentication: SettingsAuthenticationService,
              private router: Router, 
              private route: ActivatedRoute) {}

  checkInput(): void {
    if(this.settingsauthentication.checkPassword(this.userInput))
          this.router.navigate([`../trueSettings`], { relativeTo: this.route});
  }

  ngOnInit() {
  
  }

}
