import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

enum Courses {
  BCA,
  MCA,
  IMCA,
  BCA_Horns,
}

@Component({
  selector: 'app-pra5',
  imports: [NgFor],
  templateUrl: './pra5.html',
  styleUrl: './pra5.css',
})
export class Pra5 {
  courses = Object.values(Courses);
}
