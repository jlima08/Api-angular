import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { DetalhesComponent } from './testes/detalhes/detalhes.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoianeComponent } from './loiHttp/loiane/loiane.component';
import { NgContentExemploComponent } from './ng-content-exemplo/ng-content-exemplo.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustonsComponent } from './diretivas-custons/diretivas-custons.component';
import { HighLightMouseDirective } from './shared/high-light-mouse.directive';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalhesComponent,
    NavbarComponent,
    LoianeComponent,
    NgContentExemploComponent,
    FundoAmareloDirective,
    DiretivasCustonsComponent,
    HighLightMouseDirective,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
