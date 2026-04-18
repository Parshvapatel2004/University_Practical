import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-pra11',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './pra11.html',
  styleUrl: './pra11.css',
})
export class Pra11 {
  price = 1200;
  today = new Date(2025,4,1)
}
