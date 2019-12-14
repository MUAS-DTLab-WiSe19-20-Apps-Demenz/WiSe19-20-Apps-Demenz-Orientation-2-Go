import { Component, OnInit, Input } from '@angular/core';
import { SettingsDatastoreService } from '../settings-datastore.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() timer: number;

  constructor(private settingsDataStore: SettingsDatastoreService,
              private location: Location) { }

  ngOnInit() {
    this.settingsDataStore.getTimer().subscribe(t => this.timer = t);
  }

  setTimer(): void {
    this.settingsDataStore.setTimer(this.timer);
  }

  goBack(): void {
      this.location.back();
  }

}
