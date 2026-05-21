import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  template: `
    <section class="page-section page-contact">
      <div class="page-intro">
        <span>Contact</span>
        <h1>Request an appointment or ask a question.</h1>
        <p>Fill out the form below and our team will reach out to confirm your visit.</p>
      </div>
      <div class="contact-layout">
        <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" class="contact-form">
          <label>
            Full name
            <input name="name" [(ngModel)]="contact.name" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" [(ngModel)]="contact.email" required />
          </label>
          <label>
            Phone number
            <input name="phone" type="tel" [(ngModel)]="contact.phone" required />
          </label>
          <label>
            How can we help?
            <textarea name="message" rows="5" [(ngModel)]="contact.message" required></textarea>
          </label>
          <button type="submit" class="button primary" [disabled]="contactForm.invalid">Send request</button>
        </form>
        <aside class="contact-info">
          <div>
            <strong>Clinic location</strong>
            <p>123 Family Care Road, Happy City</p>
          </div>
          <div>
            <strong>Working hours</strong>
            <p>Mon - Sat: 9:00 AM to 6:00 PM</p>
          </div>
          <div>
            <strong>Emergency support</strong>
            <p>Call or leave your message and we'll respond promptly.</p>
          </div>
        </aside>
      </div>
      <div class="form-success" *ngIf="submitted">
        <h2>Appointment request sent</h2>
        <p>Thank you, {{ contact.name }}. We will contact you soon to confirm your appointment.</p>
      </div>
    </section>
  `
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
    }
  }
}
