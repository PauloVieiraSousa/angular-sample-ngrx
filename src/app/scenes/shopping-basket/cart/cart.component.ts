import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ProductsState} from '../../../store/reducers';
import { getListProducts } from 'src/app/store/actions';
import { Observable } from 'rxjs';
import { selectProducts } from 'src/app/store/selectors';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  selectProductsList$: Observable<ProductsState>;

  constructor( private store: Store<ProductsState>) {
    this.store.dispatch(getListProducts({payload: null}))
  }

  ngOnInit() {

    this.selectProductsList$ = this.store.pipe(
      select<ProductsState, any, any>(selectProducts)
    )

  }





}
