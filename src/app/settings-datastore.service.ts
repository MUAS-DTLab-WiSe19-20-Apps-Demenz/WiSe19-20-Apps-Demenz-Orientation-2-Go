import { Injectable } from '@angular/core';
import { Address } from './address';
import { Observable, of } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class SettingsDatastoreService {

  address: Address;
  radius: number = 500;
  timer: number = 30;
  checkInterval: number = 5;
  contacts: Contact[];

  constructor() {
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

}
