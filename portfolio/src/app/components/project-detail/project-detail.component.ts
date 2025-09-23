import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService, Project } from '../../services/data.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.project = this.data.getProjectBySlug(slug);

    if (this.project) {
      const pageTitle = `${this.project.title} — ${this.data.name()}`;
      this.title.setTitle(pageTitle);
      this.meta.updateTag({ name: 'description', content: this.project.description });
      this.meta.updateTag({ property: 'og:title', content: pageTitle });
      this.meta.updateTag({ property: 'og:description', content: this.project.description });
      this.meta.updateTag({ property: 'og:image', content: this.project.thumbnail });
      this.injectJsonLd(this.project);
    }
  }

  private injectJsonLd(project: Project) {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': project.title,
      'description': project.description,
      'image': project.thumbnail,
      'author': {
        '@type': 'Person',
        'name': this.data.name()
      }
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);

    const existing = this.document.head.querySelector('script[type="application/ld+json"]');
    if (existing) existing.remove();
    this.document.head.appendChild(script);
  }
}
