import {NgModule} from '@angular/core';
import {ShoppingBasketRouting} from './shopping-basket-routing.module';
import {CartComponent} from './cart/cart.component';
import {TableProductsComponent} from './components/table-products/table-products.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ CartComponent, TableProductsComponent ],
  entryComponents: [ CartComponent ],
  providers: [],
  imports: [ CommonModule, ShoppingBasketRouting ],
  exports: []
})
export class ShoppingBasketModule {
}
