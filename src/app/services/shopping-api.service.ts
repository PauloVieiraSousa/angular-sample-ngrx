import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingApiService {

  constructor(private http: HttpClient) {
  }

  public getShoppingBasket() {
    return this.http.get('http://localhost:9002/swagger-mock/shopping-basket');
  }

}
