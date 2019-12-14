import { Component, OnInit, Input } from '@angular/core';
import { SettingsDatastoreService } from '../settings-datastore.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-check-interval',
  templateUrl: './check-interval.component.html',
  styleUrls: ['./check-interval.component.css']
})
export class CheckIntervalComponent implements OnInit {

  @Input() checkInterval: number;

  constructor(private settingsDataStore: SettingsDatastoreService,
              private location: Location) { }

  ngOnInit() {
    this.settingsDataStore.getCheckInterval().subscribe(t => this.checkInterval = t);
  }

  setCheckInterval(): void {
    this.settingsDataStore.setCheckInterval(this.checkInterval);
  }

  goBack(): void {
      this.location.back();
  }

}
