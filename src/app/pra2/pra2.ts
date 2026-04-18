import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-pra2',
  imports: [],
  templateUrl: './pra2.html',
  styleUrl: './pra2.css',
})
export class Pra2 {
  user = {
    name: 'Shree',
    email: 'shree@example.com',
    profile:
      'https://images.unsplash.com/photo-1773332585754-f1436987743b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    age: 25
  };
}
