import { createAction, props } from '@ngrx/store';

export const getListProducts = createAction(
  '[Shopping Page] Load List Products',
  props<{payload: any}>()
);

export const getListProductsSuccess = createAction(
  '[Shopping API] List Products Loaded Success',
  props<{payload: any}>()
);

export const getListProductsFails = createAction(
  '[Shopping API] List Products Loaded Error',
  props<{payload: any}>()
);

