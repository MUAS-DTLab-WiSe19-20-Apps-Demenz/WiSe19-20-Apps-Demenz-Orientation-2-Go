import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment.type';

@Component({
  selector: 'app-app-calendar',
  templateUrl: './app-calendar.component.html',
  styleUrls: ['./app-calendar.component.css']
})
export class AppCalendarComponent implements OnInit {

  isNew = null;
  appointmentDetail: Appointment;
  appointments: Appointment[] = [
    {
      id: new Date().getTime().toString(),
      title: 'event1',
      start: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onRequestNewAppointment(e: Appointment): void {
    this.isNew = true;
    this.appointmentDetail = e;
  }

  onRequestUpdateAppointment(e: Appointment): void {
    this.isNew = false;
    this.appointmentDetail = e;
  }

  onCloseAppointmentDetail(): void {
    this.appointmentDetail = null;
    this.isNew = null;
  }

  onAdd(appointment: Appointment): void {
    this.appointments = [...this.appointments, { id: new Date().getTime().toString(), ...appointment }];
    this.onCloseAppointmentDetail();
  }

  onUpdate(appointment: Appointment): void {
    this.appointments = this.appointments.map(
      a => a.id === appointment.id ? { ...a, ...appointment } : a
    );
    this.onCloseAppointmentDetail();
  }

  onAppointmentUpdated(appointment: Appointment): void {
    this.onUpdate(appointment);
  }

}
