import { Location } from '@angular/common'
import { Component, OnInit, Input } from '@angular/core';
import { SettingsDatastoreService } from '../settings-datastore.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() navigation: string;

  constructor(private settingsDataStore: SettingsDatastoreService,
              private location: Location) { }

  ngOnInit() {
    this.settingsDataStore.getNavigation().subscribe(t => this.navigation = t);
  }

  setNavigation(): void {
    this.settingsDataStore.setNavigation(this.navigation);
  }

  changeToGoogle(): void {
    this.navigation = 'Google';
    this.settingsDataStore.setNavigation('Google');
  }

  changeToHere(): void {
    this.navigation = 'Here';
    this.settingsDataStore.setNavigation('Here');
  }

  goBack() : void {
    this.location.back();
  }

}
