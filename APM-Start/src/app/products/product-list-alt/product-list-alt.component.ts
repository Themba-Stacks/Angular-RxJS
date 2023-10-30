import { Component } from '@angular/core';
import { EMPTY, Subscription, catchError } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
})
export class ProductListAltComponent {
  constructor(private productService: ProductService) {}

  sub!: Subscription;

  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId = 0;
  products$ = this.productService.products$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
