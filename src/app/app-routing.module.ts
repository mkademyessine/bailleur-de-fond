import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BailleurComponent } from './bailleur/bailleur.component';
import { HomeComponent } from './home/home.component';
import { ZoneComponent } from './zone/zone.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'zone',component:ZoneComponent },
  {path:'bailleur',component:BailleurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
