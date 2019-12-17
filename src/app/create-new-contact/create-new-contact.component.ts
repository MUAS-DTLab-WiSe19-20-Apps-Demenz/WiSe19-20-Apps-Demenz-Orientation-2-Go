import { Component, OnInit, Input } from '@angular/core';
import { SettingsDatastoreService } from '../settings-datastore.service';
import { Contact } from '../contact';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-new-contact',
  templateUrl: './create-new-contact.component.html',
  styleUrls: ['./create-new-contact.component.css']
})
export class CreateNewContactComponent implements OnInit {

  @Input() contact: Contact;
  @Input() name : string;
  @Input() phone: string;

  constructor(private settingsDataStore: SettingsDatastoreService,
              private location: Location,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

  }

  addContact() : void {
    this.contact = new Contact();
    this.contact.name = this.name;
    this.contact.phone = this.phone;
    this.settingsDataStore.addContacts(this.contact);
    this.router.navigate([`../contacts`], { relativeTo: this.route});
  }

  goBack() : void {
    this.location.back();
  }

}
