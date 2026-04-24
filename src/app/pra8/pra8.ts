import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pra8',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './pra8.html',
  styleUrl: './pra8.css',
})
export class Pra8 {
  students = ['parshva', 'patel', 'hello','meet vastral'];
  showlist = true;
}
