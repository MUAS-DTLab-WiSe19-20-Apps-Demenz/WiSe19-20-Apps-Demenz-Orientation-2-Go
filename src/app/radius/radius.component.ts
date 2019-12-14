import { Component, OnInit, Input } from '@angular/core';
import { SettingsDatastoreService } from '../settings-datastore.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-radius',
  templateUrl: './radius.component.html',
  styleUrls: ['./radius.component.css']
})
export class RadiusComponent implements OnInit {

  @Input() radius: number;

  constructor(private settingsDataStore: SettingsDatastoreService,
              private location: Location) { }

  ngOnInit() {
    this.settingsDataStore.getRadius().subscribe(t => this.radius = t);
  }

  setRadius(): void {
    this.settingsDataStore.setRadius(this.radius);
  }

  goBack(): void {
      this.location.back();
  }

}
