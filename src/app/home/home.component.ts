import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SettingsAuthenticationService } from '../settings-authentication.service';
import { SettingsDatastoreService } from '../settings-datastore.service';
import { Address } from '../address';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ini: boolean;

  constructor(private router: Router,
              private settingsAuth: SettingsAuthenticationService,
              private settingsDatastore: SettingsDatastoreService) { }

  settingsClick() {
    console.log("abfrage in home component" + localStorage.getItem('password'));
    if(this.ini) {
      let route = this.router.config.find(r => r.path === 'trueSettings');
      this.router.navigateByUrl(`${'trueSettings'}`);
    } else {
      let route = this.router.config.find(r => r.path === 'settings');
      this.router.navigateByUrl(`${'settings'}`);
    }
    
  }

  bringMeHome() {
    console.log("Bring_Me_Home-Button pressed!");
    let route = this.router.config.find(r => r.path === 'mapnavigation');
    let destination = new Address;
    this.settingsDatastore.getAddress().subscribe(t => destination = t);
    if(Number.isNaN(destination.housenumber)){
      destination.street = 'Lothstraße';
      destination.housenumber = 40;
      destination.place = "München";
    }
    window.location.href = 'https://www.google.com/maps/dir/?api=1&destination='
      + encodeURIComponent(destination.place + ', ' + destination.street + ' ' + destination.housenumber);
//    this.router.navigateByUrl(`${'mapnavigation'}`);
  }


  calendarClick() {
    console.log("Calendar-Button pressed!");
    let route = this.router.config.find(r => r.path === 'calendar');
    this.router.navigateByUrl(`${'calendar'}`);
  }

  ngOnInit() {
    this.settingsAuth.isInitial().subscribe(t => this.ini = t);
  }

}
