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
  appointments: Appointment[] = JSON.parse(localStorage.getItem('appointments'));

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
    console.log("add");
    if(this.appointments != null){
      this.appointments = [...this.appointments, { id: new Date().getTime().toString(), ...appointment }];
    }
    else{
      this.appointments = [{ id: new Date().getTime().toString(), ...appointment }];
    }
    this.setLocalStorage();
    this.onCloseAppointmentDetail();
  }

  onDelete(appointment: Appointment): void {
    console.log("delete");
    this.appointments = this.appointments.map(
      a => a.id === appointment.id ? {} : a
    );
    this.clean();
    this.setLocalStorage();
    this.onCloseAppointmentDetail();
  }

  onUpdate(appointment: Appointment): void {
    console.log("update");
    this.appointments = this.appointments.map(
      a => a.id === appointment.id ? { ...a, ...appointment } : a
    );
    this.setLocalStorage();
    this.onCloseAppointmentDetail();
  }

  onAppointmentUpdated(appointment: Appointment): void {
    this.onUpdate(appointment);
  }

  setLocalStorage(): void {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
    console.log(localStorage.getItem('appointments'));
  }

  clean(): void {
    for(var index = 0; index < this.appointments.length; index++){
      if(this.appointments[index].id === null || this.appointments[index].id === undefined)
        this.appointments.splice(index, 1);
    }
  }
}
