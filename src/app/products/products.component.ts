import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  template: `
  <h1>Productos</h1>
  <product *ngFor="let product of products" [product]="product">
    <div>{{product}}</div>
  </product>
  `,
  styles: [`:host{border: 1px solid #000;}`]
})
export class ProductsComponent  {
  @Input()
  products:any = [];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product: any) {
    this.productAdded.emit(product);
  }
 
}
