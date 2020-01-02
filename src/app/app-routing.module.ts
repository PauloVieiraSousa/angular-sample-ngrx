import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormExampleComponent} from "./form-example/form-example.component";


const routes: Routes = [
  {
    path: '',
    component: FormExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
