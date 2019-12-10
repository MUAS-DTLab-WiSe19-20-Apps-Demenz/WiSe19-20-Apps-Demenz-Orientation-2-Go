import { Injectable } from '@angular/core';
import { Address } from './address';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsDatastoreService {

  address: Address;
  radius: number = 500;
  timer: number = 30;
  checkInterval: number = 5;

  constructor() { }

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



}
