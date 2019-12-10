import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Address } from '../address';
import { SettingsDatastoreService } from '../settings-datastore.service';

@Component({
  selector: 'app-home-adress',
  templateUrl: './home-adress.component.html',
  styleUrls: ['./home-adress.component.css']
})
export class HomeAdressComponent implements OnInit {

  @Input() address: Address;
  @Input() str: string;
  @Input() num: number;
  @Input() plz: number;
  @Input() pla: string;

  constructor(private settingsDatastore: SettingsDatastoreService,
              private location: Location) { }

  ngOnInit() {
    this.settingsDatastore.getAddress().subscribe(t => this.address = t);
    /*this.address.street = "Reinickendorfer Str";
    this.address.housenumber = 12;
    this.address.postcode = 58642;
    this.address.place = "Letmathe";
    this.settingsDatastore.setAddress(this.address); */
  }

  goBack(): void {
    this.location.back();
  }

  changeAddress(): void {
    this.address = new Address;
    this.address.housenumber = this.num;
    this.address.street = this.str;
    this.address.place = this.pla;
    this.address.postcode = this.plz;
    this.settingsDatastore.setAddress(this.address);
  }

}
