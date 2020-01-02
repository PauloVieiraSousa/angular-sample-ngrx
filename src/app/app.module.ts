import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormExampleComponent } from './form-example/form-example.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CpfCnpjDirective } from './directive/cpf-cnpj.directive';
import {CpfCnpjValidatorDirective} from './directive/cpf-cnpj-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    CpfCnpjDirective,
    CpfCnpjValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
