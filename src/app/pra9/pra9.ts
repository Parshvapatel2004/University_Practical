import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pra9',
  imports: [NgFor],
  templateUrl: './pra9.html',
  styleUrl: './pra9.css',
})
export class Pra9 {
  products = [
    {
      name: 'mouse',
      price: 599,
    },
    {
      name: 'keyboard',
      price: 900,
    },
    {
      name: 'moniter',
      price: 10000,
    },
  ];
  buyProduct(product: any) {
    alert(product.name + 'purchased');
  }
}
