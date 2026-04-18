import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pra10',
  imports: [FormsModule],
  templateUrl: './pra10.html',
  styleUrl: './pra10.css',
})
export class Pra10 {

  user = {
    name:'',
    address:'',
    phone:''
  }
}
