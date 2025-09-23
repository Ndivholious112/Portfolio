import { Component, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
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
  selectedProject: any | null = null; 
  selectedTag: string | null = null;
  query = '';
  private scrollY = 0;

  constructor(
    public data: DataService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

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
    this.lockScroll();
    this.renderer.addClass(this.document.documentElement, 'modal-open');
  }

  closeImageModal() {
    this.selectedImage = null;
    if (!this.selectedProject) {
      this.unlockScroll();
      this.renderer.removeClass(this.document.documentElement, 'modal-open');
    }
  }

  openDescriptionModal(project: any) {
    this.selectedProject = project;
    this.lockScroll();
    this.renderer.addClass(this.document.documentElement, 'modal-open');
  }

  closeDescriptionModal() {
    this.selectedProject = null;
    if (!this.selectedImage) {
      this.unlockScroll();
      this.renderer.removeClass(this.document.documentElement, 'modal-open');
    }
  }

  private lockScroll() {
    if (!this.document.body.classList.contains('no-scroll')) {
      this.scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      this.renderer.addClass(this.document.body, 'no-scroll');
      this.renderer.setStyle(this.document.body, 'position', 'fixed');
      this.renderer.setStyle(this.document.body, 'top', `-${this.scrollY}px`);
      this.renderer.setStyle(this.document.body, 'width', '100%');
      this.renderer.addClass(this.document.documentElement, 'modal-open');
    }
  }

  private unlockScroll() {
    const top = this.document.body.style.top;
    this.renderer.removeClass(this.document.body, 'no-scroll');
    this.renderer.removeStyle(this.document.body, 'position');
    this.renderer.removeStyle(this.document.body, 'top');
    this.renderer.removeStyle(this.document.body, 'width');
    const y = top ? parseInt(top.replace('px', ''), 10) : 0;
    if (typeof window !== 'undefined') {
      window.scrollTo(0, Math.abs(y));
    }
  }
}
