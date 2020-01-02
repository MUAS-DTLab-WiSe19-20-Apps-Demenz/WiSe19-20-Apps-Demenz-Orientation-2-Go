import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarEvents = [
    { title: 'event 1',
    start:  '2020-01-01T14:30:00',
    place: 'Lothstraße 64'}
  ];
  calendarActivated: any;


  constructor(private route: ActivatedRoute,
              private router: Router) {}



  handleDateClick(calDate) {
    let route = this.router.config.find(r => r.path === 'addEvent');
      this.router.navigateByUrl(`${'addEvent'}`);
    console.log(calDate);
 }

 eventClicked(calDate) {
  let route = this.router.config.find(r => r.path === 'changeEvent');
  this.router.navigateByUrl(`${'changeEvent'}`);
   console.log(calDate);
 }

 ngOnInit() {
    this.route.data.subscribe((res) => {this.calendarActivated = res;
    },
    error => {
      console.log('ERROR', error);
    });
  }



}
