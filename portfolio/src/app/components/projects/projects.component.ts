import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  selectedImage: string | null = null;
  selectedProject: any | null = null; // New property to hold the selected project
  selectedTag: string | null = null;
  query = '';

  constructor(public data: DataService) {}

  allTags(): string[] {
    const set = new Set<string>();
    this.data.projects().forEach(p => p.tags.forEach(t => set.add(t)));
    return Array.from(set).sort();
  }

  projectsFiltered() {
    return this.data
      .projects()
      .filter(p => !this.selectedTag || p.tags.includes(this.selectedTag!))
      .filter(p =>
        !this.query ||
        p.title.toLowerCase().includes(this.query.toLowerCase()) ||
        p.description.toLowerCase().includes(this.query.toLowerCase())
      );
  }

  slugFor(project: any): string {
    return this.data.slugify(project.title);
  }

  openImageModal(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImageModal() {
    this.selectedImage = null;
  }

  openDescriptionModal(project: any) {
    this.selectedProject = project;
  }

  closeDescriptionModal() {
    this.selectedProject = null;
  }
}
