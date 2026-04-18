import { Component } from '@angular/core';
import { HighlightOverduePra13 } from '../directives/highlight-overdue-pra13';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pra13',
  imports: [HighlightOverduePra13, NgFor],
  templateUrl: './pra13.html',
  styleUrl: './pra13.css',
})
export class Pra13 {
  tasks = [
    { name: 'Submit Assignment', overdue: true },
    { name: 'Study Angular', overdue: false },
    { name: 'Pay fees', overdue: true },
  ];
}
