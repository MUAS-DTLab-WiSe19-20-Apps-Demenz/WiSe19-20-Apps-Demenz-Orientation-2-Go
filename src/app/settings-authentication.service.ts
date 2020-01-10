import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsAuthenticationService {

  initial: boolean = true;

  checkPassword(password: string): boolean {
    return localStorage.getItem('password') == password;
  }

  setPassword(password: string): void {
    console.log("übergen: " + password);
    localStorage.setItem('password', password);
    console.log("Passwort wurde geändertt:" + localStorage.getItem('password'));
    this.initial = false;
  }

  getPassword() : Observable<string> { 
    return of(localStorage.getItem('password'));
  }

  isInitial() : Observable<boolean> {
    if(localStorage.getItem('password') == null)
      return of(true);
    return of(false);
  }

  getPasswordString() : string { 
    return localStorage.getItem('password');
  }

  constructor() { }
}
