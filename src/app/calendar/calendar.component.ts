import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
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
    { title: 'event 1', date: '2019-04-01' }
  ];
  calendarActivated: any;


  constructor(private route: ActivatedRoute) {}


  modifyTitle(eventIndex, newTitle) {
    let calendarEvents = this.calendarEvents.slice();
    let singleEvent = Object.assign({}, calendarEvents[eventIndex]);
    singleEvent.title = newTitle;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; 
  }

  addEvent() {
    this.calendarEvents = this.calendarEvents.concat(
      {title: 'event 2', date: '2019-04-02'}
    );
  }

  handleDateClick(calDate) {
    console.log(calDate);
 }

 eventClicked(calDate) {
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
