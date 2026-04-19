import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pra21',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './pra21.html',
  styleUrl: './pra21.css',
})
export class Pra21 {
  student = {
    name: '',
    email: '',
    gender: '',
    course: '',
  };

  onSubmit() {
    alert('Form submitted successfully');
  }
}
