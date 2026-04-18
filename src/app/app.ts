import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Practical1 } from './practical-1/practical-1';
import { Pra2 } from './pra2/pra2';
import { Pra3 } from './pra3/pra3';
import { Pra4 } from './pra4/pra4';
import { Pra5 } from './pra5/pra5';
import { Pra6 } from './pra6/pra6';
import { Pra7 } from './pra7/pra7';
import { Pra8 } from './pra8/pra8';
import { Pra9 } from './pra9/pra9';
import { Pra10 } from './pra10/pra10';
import { Pra11 } from './pra11/pra11';
import { Pra12 } from './pra12/pra12';
import { Pra13 } from './pra13/pra13';
import { Pra14 } from './pra14/pra14';
import { Pra15 } from './pra15/pra15';
import { Pra16 } from './pra16/pra16';
import { Pra17 } from './pra17/pra17';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet,
    Practical1,
    Pra2,
    Pra3,
    Pra4,
    Pra5,
    Pra6,
    Pra7,
    Pra8,
    Pra9,
    Pra10,
    Pra11,
    Pra12,
    Pra13,
    Pra14,
    Pra15,
    Pra16,
    Pra17
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Buddy';
}
