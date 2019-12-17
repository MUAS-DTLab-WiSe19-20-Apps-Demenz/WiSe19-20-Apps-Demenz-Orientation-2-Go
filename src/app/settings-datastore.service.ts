import { Injectable } from '@angular/core';
import { Address } from './address';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SettingsDatastoreService {

  address: Address;
  radius: number = 500;
  timer: number = 30;
  checkInterval: number = 5;
  navigation: string = 'Here';
  contacts: Contact[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  getAddress() : Observable<Address> {
    return of(this.address);
  }

  setAddress(addr : Address): void {
    if(this.address == null) 
      this.address = new Address;
    this.address.housenumber = addr.housenumber;
    this.address.place = addr.place;
    this.address.postcode = addr.postcode;
    this.address.street = addr.street;
  } 

  getRadius() : Observable<number> {
    return of(this.radius);
  }

  setRadius(rad : number): void {
    this.radius = rad;
  } 

  getTimer() : Observable<number> {
    return of(this.timer);
  }

  setTimer(tim : number): void {
    this.timer = tim;
  } 

  getCheckInterval() : Observable<number> {
    return of(this.checkInterval);
  }

  setCheckInterval(check : number): void {
    this.checkInterval = check;
  } 

  getNavigation() : Observable<string> {
    return of(this.navigation);
  }

  setNavigation(nav : string): void {
    this.navigation = nav;
  } 

  getContacts() : Observable<Contact[]> {
    return of(this.contacts);
  }

  addContacts(con: Contact) : void {
    this.contacts.push(con);
  }

  removeContact(con: Contact) : void {
  
    console.log("Übergebener wert: " + con.name + " " + con.phone);
    const index: number = this.contacts.indexOf(con);
    console.log(index + " sollte entfernt werden");

    var hel = this.contacts.splice(0, 1);
  }



}
