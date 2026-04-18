import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentPra15 {
  getStudents() {
    return [
      { name: 'Meet', marks: 80 },
      { name: 'Parshva', marks: 60 },
      { name: 'Jaivik', marks: 10 },
      { name: 'Ram', marks: 90 },
    ];
  }
}
