import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  loading = false;
  toast: { type: 'success' | 'error'; message: string } | null = null;

  constructor(public data: DataService) {}

  async submit() {
    if (!this.name || !this.email || !this.message) {
      return this.showToast('error', 'Please fill out all fields.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      return this.showToast('error', 'Please enter a valid email address.');
    }

    this.loading = true;
    try {
      const emailjs = (window as any).emailjs;
      if (!emailjs) throw new Error('EmailJS SDK not loaded');

      const serviceId = 'service_f1r5meg';
      const templateId = 'template_ifeusq9';
      const publicKey = 'fBdmf9eqQ4cBBCXjB';

      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        from_name: this.name,
        name: this.name,
        reply_to: this.email,
        message: this.message,
        time: new Date().toLocaleString()
      });
      this.showToast('success', 'Message sent! I will get back to you soon.');
      this.name = this.email = this.message = '';
    } catch (e) {
      this.showToast('error', 'Failed to send. Please try again later.');
    } finally {
      this.loading = false;
    }
  }

  private showToast(type: 'success' | 'error', message: string) {
    this.toast = { type, message };
    setTimeout(() => (this.toast = null), 4000);
  }
}
