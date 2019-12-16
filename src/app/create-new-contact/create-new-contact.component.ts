import { Component, OnInit, Input } from '@angular/core';
import { SettingsDatastoreService } from '../settings-datastore.service';
import { Contact } from '../contact';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-new-contact',
  templateUrl: './create-new-contact.component.html',
  styleUrls: ['./create-new-contact.component.css']
})
export class CreateNewContactComponent implements OnInit {

  contact: Contact;
  @Input() name : string;
  @Input() phone: string;

  constructor(private settingsDataStore: SettingsDatastoreService,
              private location: Location) { }

  ngOnInit() {

  }

  addContact() : void {
    this.contact = new Contact();
    this.contact.name = this.name;
    this.contact.phone = this.phone;
    this.settingsDataStore.addContacts(this.contact);
  }

  goBack() : void {
    this.location.back();
  }

}
