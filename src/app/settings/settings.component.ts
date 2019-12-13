import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{

  settingsActivated: any;
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.data.subscribe((res) => {this.settingsActivated = res;
    },
    error => {
      console.log('ERROR', error);
    });
  }
}
