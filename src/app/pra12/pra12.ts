import { Component } from '@angular/core';
import { NameAbberPra12Pipe } from '../pipes/name-abber-pra12-pipe';

@Component({
  selector: 'app-pra12',
  imports: [NameAbberPra12Pipe],
  templateUrl: './pra12.html',
  styleUrl: './pra12.css',
})
export class Pra12 {
  name = 'Sonal K Patel';
}
