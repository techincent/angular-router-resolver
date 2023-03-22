import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'https://api.storerestapi.com/v1'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.baseUrl + '/products')
  }

  getProduct(slug: string): Observable<any> {
    return this.http.get(this.baseUrl + '/products/' + slug)
  }
}
