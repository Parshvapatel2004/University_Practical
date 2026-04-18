import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pra16',
  standalone: true,
  imports: [NgFor, HttpClientModule, CommonModule],
  templateUrl: './pra16.html',
  styleUrl: './pra16.css',
})
export class Pra16 {
  posts: any[] = [];
  constructor(private http: HttpClient) {
    this.getData();
  }
  getData() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        console.log('DATA:', data);
        this.posts = data;
      },
      error: (err) => {
        console.log('ERROR:', err);
      },
    });
  }
}
