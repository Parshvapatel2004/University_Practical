import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pra19',
  imports: [RouterOutlet, RouterLink,NgFor],
  templateUrl: './pra19.html',
  styleUrl: './pra19.css',
})
export class Pra19 {
  users = [
    { id: 1, name: 'parshva', age: 21 },
    { id: 2, name: 'kashudi', age: 22 },
  ];
}
