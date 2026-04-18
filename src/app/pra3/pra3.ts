import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-pra3',
  imports: [],
  templateUrl: './pra3.html',
  styleUrl: './pra3.css',
})
export class Pra3 {
  student: Student = new Student(101, 'parshva', 'MCA', 88);
}
