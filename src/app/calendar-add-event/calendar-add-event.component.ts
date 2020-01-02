import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsDatastoreService } from '../settings-datastore.service';
import { Event } from '../event';

@Component({
  selector: 'app-calendar-add-event',
  templateUrl: './calendar-add-event.component.html',
  styleUrls: ['./calendar-add-event.component.css']
})
export class CalendarAddEventComponent implements OnInit {

  @Input() event : Event;
  @Input() name : string;
  @Input() place : string;
  @Input() time: string;


  constructor(private route: ActivatedRoute,
              private settingsDataStore: SettingsDatastoreService,
              private router: Router) {}

  calendarAddEventActivated: any;

  ngOnInit() {
    this.route.data.subscribe((res) => {this.calendarAddEventActivated = res;
    },
    error => {
      console.log('ERROR', error);
    });
  }

  addEvent() {
    this.event = new Event();
    this.event.name = this.name;
    this.event.place = this.place;
    this.event.time = this.time;
    this.settingsDataStore.addEvent(this.event);
    this.router.navigate([`../calendar`], { relativeTo: this.route});
  }

}
