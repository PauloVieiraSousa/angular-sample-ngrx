import {
  Action, createReducer,
  on
} from '@ngrx/store';

import * as ShoppingAction from '../actions/shopping.action';

export const productsFeatureKey = 'products';

export interface Product {
 id: string;
 product: string;
 qtd: number;
 price: string;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  errorMessage: [];
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  errorMessage: []
};

const shoppingReducers = createReducer(
  initialState,
  on(ShoppingAction.getListProducts, state => ({
    ...state,
    loading: true
  })),
  on(ShoppingAction.getListProductsSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      products: action.payload
    };
  }),
  on(ShoppingAction.getListProductsFails, (state, action) => ({
    ...state,
    errorMeesage: action.payload,
    loading: false
  }))
);

export function reducer(state: ProductsState | undefined, action: Action) {
  return shoppingReducers(state, action);
}
