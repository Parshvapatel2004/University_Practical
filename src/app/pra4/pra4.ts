import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-pra4',
  imports: [],
  templateUrl: './pra4.html',
  styleUrl: './pra4.css',
})
export class Pra4 {
  product: Product = {
    id: 1,
    name: 'mouse',
    price: 122,
    category: 'electronics',
  };
}
