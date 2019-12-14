import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsAuthenticationService {

  password: string;
  initial: boolean = true;

  checkPassword(password: string): boolean {
    return this.password == password;
  }

  setPassword(password: string): void {
    this.password = password;
    this.initial = false;
  }

  getPassword() : Observable<string> { 
    return of(this.password);
  }

  isInitial() : Observable<boolean> {
    if(this.password == null)
      return of(true);
    return of(false);
  }

  getPasswordString() : string { 
    return this.password;
  }

  constructor() { }
}
