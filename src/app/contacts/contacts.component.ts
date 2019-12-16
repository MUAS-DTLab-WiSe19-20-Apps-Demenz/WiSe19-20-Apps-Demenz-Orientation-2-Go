import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { SettingsDatastoreService } from '../settings-datastore.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts : Contact[];

  constructor(private settingsDataStore: SettingsDatastoreService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.settingsDataStore.getContacts().subscribe(t => this.contacts = t);
  }

  newContact(): void {
    this.router.navigate([`../newContact`], { relativeTo: this.route});
  }

  goBack(): void {
    this.router.navigate([`../trueSettings`], { relativeTo: this.route});
  }

}
