import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { DetalhesComponent } from './testes/detalhes/detalhes.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoianeComponent } from './loiHttp/loiane/loiane.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalhesComponent,
    NavbarComponent,
    LoianeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
