// navbar.component.ts

import { Component, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  name = 'Ndivho Nemutshili';
  isMenuOpen = false;
  isLight = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved) {
      this.isLight = saved === 'light';
    } else if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.isLight = true;
    }
    this.applyTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(this.document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(this.document.body, 'no-scroll');
    }
  }

  toggleTheme() {
    this.isLight = !this.isLight;
    localStorage.setItem('theme', this.isLight ? 'light' : 'dark');
    this.applyTheme();
  }

  private applyTheme() {
    const root = this.document.documentElement; 
    if (this.isLight) {
      this.renderer.addClass(root, 'light');
    } else {
      this.renderer.removeClass(root, 'light');
    }
  }
}
