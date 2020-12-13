import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:4000/product'
  constructor(private http:HttpClient) { }

  getProducts() {
    // send the token along with the request
    return this.http.get(this.url)
  }

}
