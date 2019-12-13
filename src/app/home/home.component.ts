import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  settingsClick() {
    console.log("Settings-Button pressed!");
    let route = this.router.config.find(r => r.path === 'settings');
    this.router.navigateByUrl(`${'settings'}`);
  }

  bringMeHome() {
    console.log("Bring_Me_Home-Button pressed!");
    let route = this.router.config.find(r => r.path === 'navigation');
    this.router.navigateByUrl(`${'navigation'}`);
  }

  calendarClick() {
    console.log("Calendar-Button pressed!");
    let route = this.router.config.find(r => r.path === 'calendar');
    this.router.navigateByUrl(`${'calendar'}`);
  }

}
