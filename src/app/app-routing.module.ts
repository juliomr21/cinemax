import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NavComponent } from './nav/nav.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { Top10Component } from './top10/top10.component';
import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'movie/:id',
    component:MovieDetailComponent
  },
  {
    path:'buscar/:palabra',
    component:BuscarComponent
  },
  {
    path:'favoritas',
    component:FavoritasComponent
  },
  {
    path: 'top10',
    component: Top10Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
