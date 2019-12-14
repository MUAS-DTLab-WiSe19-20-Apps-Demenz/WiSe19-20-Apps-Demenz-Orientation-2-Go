import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecuredSettingsComponent } from './secured-settings/secured-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeAdressComponent } from './home-adress/home-adress.component';
import { RadiusComponent } from './radius/radius.component';
import { TimerComponent } from './timer/timer.component';
import { CheckIntervalComponent } from './check-interval/check-interval.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MapnavigationComponent } from './mapnavigation/mapnavigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SecuredSettingsComponent,
    ChangePasswordComponent,
    HomeAdressComponent,
    RadiusComponent,
    TimerComponent,
    CheckIntervalComponent,
    NavigationComponent,
    ContactsComponent,
    HomeComponent,
    CalendarComponent,
    MapnavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        { path: 'settings', component: SettingsComponent},
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
