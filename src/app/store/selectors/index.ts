import {createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromProducts from '../reducers';

export const getProducts = createFeatureSelector<fromProducts.ProductsState>('products');

export const selectProducts = createSelector(
  getProducts,
  selectProducts => selectProducts.products
);
