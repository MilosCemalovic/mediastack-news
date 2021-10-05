import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'technology',
    pathMatch: 'full'
  },
  {
    path: 'technology',
    component: TechnologyComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
