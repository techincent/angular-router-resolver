import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDescriptionComponent } from './product/product-description/product-description.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductListResolver } from './product/resolver/product-list.resolver';
import { ProductResolver } from './product/resolver/product.resolver';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    pathMatch: 'full',
    resolve: {
      products: ProductListResolver
    }
  },
  {
    path: 'products/:slug',
    component: ProductDescriptionComponent,
    resolve: {
      product: ProductResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
