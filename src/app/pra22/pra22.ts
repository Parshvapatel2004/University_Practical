import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pra22',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './pra22.html',
  styleUrl: './pra22.css',
})
export class Pra22 {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  handleFormData() {
    console.log(this.loginForm.value);
  }
}
