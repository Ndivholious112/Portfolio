import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  selectedImage: string | null = null;

  constructor(public data: DataService) {}

  openImageModal(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImageModal() {
    this.selectedImage = null;
  }
}
