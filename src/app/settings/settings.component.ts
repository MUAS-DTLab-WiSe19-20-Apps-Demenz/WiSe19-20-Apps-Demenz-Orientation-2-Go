import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsAuthenticationService } from '../settings-authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() userInput : string;
  @Input() user: string;
  @Input() hasPassword: boolean; 


  constructor(private settingsauthentication: SettingsAuthenticationService,
              private router: Router, 
              private route: ActivatedRoute) {}

  checkInput(): void {
    if(this.user == this.userInput) 
          this.router.navigate([`../trueSettings`], { relativeTo: this.route});
  }

  ngOnInit() {
      this.settingsauthentication.getPassword().subscribe(t => this.userInput = t);
      this.settingsauthentication.isInitial().subscribe(s => this.hasPassword = s);
    
  }

}
