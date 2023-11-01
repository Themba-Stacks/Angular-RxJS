import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EMPTY, Subscription, catchError } from 'rxjs';
import { ProductCategory } from '../product-categories/product-category';

import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  constructor(private productService: ProductService) {}

  categories: ProductCategory[] = [];
  sub!: Subscription;

  pageTitle = 'Product List';
  errorMessage = '';
  products$ = this.productService.products$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
