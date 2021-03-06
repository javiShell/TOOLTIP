import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product',
  template: `
  <div>{{product}}</div>
  
  `,
  styles: [`
  :host {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 10px;
    border: 1px solid blue;
    padding: 10px;
  }
  div:nth-child(1) {font-weight: bold;}
  `]
})
export class ProductComponent  {
  @Input() product: any = [];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product: any) {
    this.productAdded.emit(product);
  }
}