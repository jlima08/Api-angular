import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReativoComponent } from '../form-reativo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormReativoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FormReativoModule { }
