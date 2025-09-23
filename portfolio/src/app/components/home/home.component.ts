import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';
import { DataService } from '../../services/data.service';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
    EducationComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(
    public data: DataService,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
    const pageTitle = `${this.data.name()} — ${this.data.jobTitle()}`;
    const description = `Portfolio of ${this.data.name()}, ${this.data.jobTitle()}. Explore projects, skills, and contact.`;
    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: this.data.name(),
      jobTitle: this.data.jobTitle(),
      url: this.document.location?.origin || ''
    };
    const websiteLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: pageTitle,
      url: this.document.location?.origin || ''
    };

    const head = this.document.head;
    head.querySelectorAll('script[type="application/ld+json"]').forEach(s => s.remove());
    const script1 = this.document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(jsonLd);
    const script2 = this.document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(websiteLd);
    head.appendChild(script1);
    head.appendChild(script2);
  }
}
