import { Injectable } from '@angular/core';
import { Address } from './address';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';
import { Appointment } from './appointment.type';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SettingsDatastoreService {

  address: Address;
  radius: number = 500;
  timer: number = 30;
  checkInterval: number = 5;
  contacts: Contact[] = [];

  constructor() {
    if(localStorage.getItem('contacts') == null){
      this.contacts = [];
    }
    else{
      this.contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    if(localStorage.getItem('checkInterval') == null){
      localStorage.setItem('checkInterval', "5");
    }
    if(this.address == null) 
      this.address = new Address;
    this.address.housenumber = parseInt(localStorage.getItem('housenumber'));
    this.address.place = localStorage.getItem('place');
    this.address.postcode = parseInt(localStorage.getItem('postcode'));
    this.address.street = localStorage.getItem('street');
    if(localStorage.getItem('radius') == null){
      localStorage.setItem('radius', "500");
    }
    if(localStorage.getItem('timer') == null){
      localStorage.setItem('timer', "30");
    }
  }

  getAddress() : Observable<Address> {
    return of(this.address);
  }

  setAddress(addr : Address): void {
    
    localStorage.setItem('housenumber', addr.housenumber.toString());
    localStorage.setItem('place', addr.place);
    localStorage.setItem('postcode', addr.postcode.toString());
    localStorage.setItem('street', addr.street);
    
    this.address.housenumber = parseInt(localStorage.getItem('housenumber'));
    this.address.place = localStorage.getItem('place');
    this.address.postcode = parseInt(localStorage.getItem('postcode'));
    this.address.street = localStorage.getItem('street');
  } 

  getRadius() : Observable<number> {
    return of(parseInt(localStorage.getItem('radius')));
  }

  setRadius(rad : number): void {
    localStorage.setItem('radius', rad.toString());
  } 

  getTimer() : Observable<number> {
    return of(parseInt(localStorage.getItem('timer')));
  }

  setTimer(tim : number): void {
    localStorage.setItem('timer', tim.toString());
  } 

  getCheckInterval() : Observable<number> {
    return of(parseInt(localStorage.getItem('checkInterval')));
  }

  setCheckInterval(check : number): void {
    localStorage.setItem('checkInterval', check.toString());
  } 

  getNavigation() : Observable<string> {
    return of(localStorage.getItem('navigation'));
  }

  setNavigation(nav : string): void {
    localStorage.setItem('navigation', nav);
  } 

  getContacts() : Observable<Contact[]> {
    return of(this.contacts);
  }

  addContacts(con: Contact) : void {
    this.contacts.push(con);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  removeContact(con: Contact) : void {
  
    console.log("Übergebener wert: " + con.name + " " + con.phone);
    const index: number = this.contacts.indexOf(con);
    console.log(index + " sollte entfernt werden");

    var hel = this.contacts.splice(0, 1);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

}
