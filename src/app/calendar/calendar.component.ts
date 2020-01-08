import { ChangeDetectionStrategy, SimpleChanges, OnChanges, Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { Appointment } from '../appointment.type';
import { SettingsDatastoreService } from '../settings-datastore.service';
import $ from 'jquery';
import 'fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() viewModes = ['month', 'agendaWeek', 'agendaDay'];
  @Input() navButtons = ['prev', 'next', 'today'];
  @Input() appointments: Appointment[] = JSON.parse(localStorage.getItem('appointments'));
  @Output() requestNewAppointment = new EventEmitter<Appointment>();
  @Output() requestUpdateAppointment = new EventEmitter<Appointment>();
  @Output() appointmentUpdated = new EventEmitter<Appointment>();
  @ViewChild('calendar', {static: true}) calendar: ElementRef;
  constructor() { }

  get $Instance(): any {
    return $(this.calendar.nativeElement);
  }

  ngOnDestroy(): void {
    this.$Instance.fullCalendar('destroy');
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.appointments && simpleChanges.appointments.currentValue) {
      this.updateAppointments();
    }
  }

  ngAfterViewInit(): void {
    //localStorage.removeItem('appointments');
    console.log(localStorage.getItem('appointments'));
    this.$Instance.fullCalendar({
      selectable: true,
      editable: true,
      eventSources: [{
        events: this.appointments || [],
      }],
      header: {
        left: this.navButtons.join(','),
        center: 'title',
        right: this.viewModes.join(',')
      },
      timezone: 'UTC',
      select: (start: Date) => {
        this.requestNewAppointment.emit(this.neutralize({ start: start}));
      },
      eventClick: (event: Appointment) => {
        this.requestUpdateAppointment.emit(this.neutralize(event));
      },
      eventDrop: (event: Appointment, delta, revert) => {
        this.appointmentUpdated.emit(this.neutralize(event));
      }
    });
  }

  private updateAppointments(): void {
    // we have to do it this way, because other wise the plugin is dependent on the 
    // reference of the event source. So we have to remove all event sources and add a new one
    this.$Instance.fullCalendar('removeEventSources', this.$Instance.fullCalendar('getEventSources'));
    this.$Instance.fullCalendar('addEventSource', { events: this.appointments });
  }

  private neutralize(event: Appointment): Appointment {
    // the widget mutates the appointment in many ways. We can keep it consistent with this function
    const { start, title, id } = event;
    return { start, title, id };
  }
}