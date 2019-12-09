import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsAuthenticationService {

  password: string = "5111";

  checkPassword(password: string): boolean {
    return this.password == password;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getPassword() : Observable<string> {
    return of(this.password);
  }

  constructor() { }
}
