import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Meet {
  getStudent() {
    return [
      { name: 'meet', marks: 100 },
      { name: 'utsav', marks: 120 },
      { name: 'parshva', marks: 10 },
    ];
  }
}
