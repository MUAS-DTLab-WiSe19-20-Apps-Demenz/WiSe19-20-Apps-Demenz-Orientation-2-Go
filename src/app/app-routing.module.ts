import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SecuredSettingsComponent } from './secured-settings/secured-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeAdressComponent } from './home-adress/home-adress.component';
import { RadiusComponent } from './radius/radius.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent},
  { path: 'setings', component: SettingsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'trueSettings', component: SecuredSettingsComponent},
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: 'changeHomeAdress', component: HomeAdressComponent},
  { path: 'radius', component: RadiusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
