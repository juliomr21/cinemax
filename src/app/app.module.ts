import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { StrgeneroPipe } from './strgenero.pipe';
import { NavComponent } from './nav/nav.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { Top10Component } from './top10/top10.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FooterComponent } from './footer/footer.component';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    StrgeneroPipe,
    NavComponent,
    FavoritasComponent,
    Top10Component,
    BuscarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
