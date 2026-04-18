import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-pra17',
  imports: [NgFor],
  templateUrl: './pra17.html',
  styleUrl: './pra17.css',
})
export class Pra17 {
  data: any[] = [];

  constructor() {
    this.getData();
  }
  getData() {
    const observableData = of(['Meet', 'Ram', 'Piyush', 'Manan', 'Daksh']);

    observableData.subscribe((name) => (this.data = name));
  }
}
