import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pra14',
  imports: [NgClass,NgFor],
  templateUrl: './pra14.html',
  styleUrl: './pra14.css',
})
export class Pra14 {
  students = [
    { name: 'Meet', marks: 80 },
    { name: 'Manan', marks: 35 },
    { name: 'Daksh', marks: 20 },
    { name: 'Lily', marks: 90 },
    { name: 'Ram', marks: 67 },
    { name: 'Raman', marks: 32 },
    { name: 'Harsh', marks: 43 },
    { name: 'Vivek', marks: 22 },
    { name: 'Dipak', marks: 90 },
    { name: 'Pooja', marks: 37 },
  ];
}
