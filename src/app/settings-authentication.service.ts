import { Injectable } from '@angular/core';

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

  getPassword() : string {
    return this.password;
  }


  constructor() { }
}
