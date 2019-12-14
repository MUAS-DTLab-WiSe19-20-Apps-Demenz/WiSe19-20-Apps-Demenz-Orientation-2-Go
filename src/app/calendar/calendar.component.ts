import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarActivated: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((res) => {this.calendarActivated = res;
    },
    error => {
      console.log('ERROR', error);
    });
  }

}
