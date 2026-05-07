import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pra7',
  imports: [],
  templateUrl: './pra7.html',
  styleUrl: './pra7.css',
})
export class Pra7 {
  @Input() name!:string;
  @Input() course!:string;
  @Input() marks!:number;
}
