import { Component } from '@angular/core';
import { StudentPra15 } from '../services/student-pra15';
import { NgFor } from '@angular/common';
import { Meet } from '../meet';

@Component({
  selector: 'app-pra15',
  imports: [NgFor],
  templateUrl: './pra15.html',
  styleUrl: './pra15.css',
})
export class Pra15 {
  students: any[] = [];
  constructor(private studentsevice: Meet) {
    this.students = this.studentsevice.getStudent();
  }
}
