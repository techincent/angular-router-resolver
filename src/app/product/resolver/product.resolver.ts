import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {
  constructor(private productService: ProductService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.productService.getProduct(route.params['slug']).pipe(
      map(res => res?.data),
      catchError(() => {
        // return of("Product is not found!")
        alert("Product Not Found")
        this.router.navigate(['/products'])
        return EMPTY
      })

    );
  }
}