import { Component, SimpleChanges, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Appointment } from '../appointment.type';
@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentDetailComponent implements OnChanges {
  @Input() appointment: Appointment;
  @Input() isNew: boolean;
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<Appointment>();
  @Output() update = new EventEmitter<Appointment>();
  @Output() delete = new EventEmitter<Appointment>();

  form = this.formBuilder.group({
    title: [null, Validators.required],
    start: [],
    place: []
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.appointment && simpleChanges.appointment.currentValue) {
      this.form.patchValue({ ...this.appointment });
    }
  }

  onAdd(): void {
    const {start, title, place} = this.form.value;
    this.add.emit({start: start && new Date(start), title, place});
  }

  onUpdate(): void {
    const {start, title, id, place } = this.form.value;
    this.update.emit({ id: this.appointment.id, start: start && new Date(start), title, place });
  }

  onDelete(): void {
    const {start, title, id, place } = this.form.value;
    this.delete.emit({ id: this.appointment.id, start: start && new Date(start), title, place });
  }
}