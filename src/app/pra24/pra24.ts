import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pra24',
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './pra24.html',
  styleUrl: './pra24.css',
})
export class Pra24 {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      studentName: [''],
      subjects: this.fb.array([
        this.fb.group({
          subjectName: [''],
          marks: [''],
        }),
      ]),
    });
  }

  get subjects(): FormArray {
    return this.studentForm.get('subjects') as FormArray;
  }

  addSubject() {
    this.subjects.push(
      this.fb.group({
        subjectName: [''],
        marks: [''],
      }),
    );
  }

  removeSubject(index: number) {
    this.subjects.removeAt(index);
  }

  handleFormData() {
    console.log(this.studentForm.value);
  }
}
