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

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(this.document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(this.document.body, 'no-scroll');
    }
  }
}
