import {Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import * as ShoppingAction from '../actions/shopping.action';
import {ShoppingApiService} from '../../services/shopping-api.service';

@Injectable()
export class ShoppingEffects {

  constructor(private action$: Actions, private shoppingService: ShoppingApiService) {
  }

  loadShopping$ = createEffect( () => this.action$.pipe(
    ofType(ShoppingAction.getListProducts),
    mergeMap( action => this.shoppingService.getShoppingBasket().pipe(
      map(products => ShoppingAction.getListProductsSuccess( {payload: products})),
      catchError(error => of(ShoppingAction.getListProductsFails({payload: error})))
      )
    )
  ));


}
