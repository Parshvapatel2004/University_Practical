import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pra25',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pra25.html',
  styleUrl: './pra25.css',
})
export class Pra25 {
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  onSubmit(form: any) {
    if (form.valid && this.selectedFile) {
      console.log('Form Submitted');
      console.log('File:', this.selectedFile);

    } else {
      console.log('Form Invalid');
    }
  }
}
