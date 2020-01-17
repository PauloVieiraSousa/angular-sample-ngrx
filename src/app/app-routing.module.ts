import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'shopping-basket', loadChildren: () => import('./scenes/shopping-basket/shopping-basket.module').then( m => m.ShoppingBasketModule ) },
  {
    path: '',
    redirectTo: 'shopping-basket',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
