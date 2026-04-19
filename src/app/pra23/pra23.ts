import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-pra23',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './pra23.html',
  styleUrl: './pra23.css',
})
export class Pra23 {
  loginForm = new FormGroup({
    password: new FormControl('', [Validators.required, this.passwordStrengthValidator]),
  });

  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (hasCapitalLetter && hasNumber && hasSpecialCharacter) {
      return null;
    }

    return { passwordStrength: true };
  }

  handleFormData() {
    console.log(this.loginForm.value);
  }
}
