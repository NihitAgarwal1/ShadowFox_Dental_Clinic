import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

type ContactFormValue = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact: ContactFormValue = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  submitted = false;
  submittedName = '';
  private readonly clinicEmail = 'info@sakthidentalclinic.in';

  formatPhoneNumber() {
    this.contact.phone = this.contact.phone.replace(/\D/g, '').slice(0, 10);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const submittedContact = { ...this.contact };
      this.submittedName = submittedContact.name;
      this.submitted = true;
      this.sendAppointmentEmail(submittedContact);
      form.resetForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      return;
    }

    Object.values(form.controls).forEach((control: any) => {
      if (control && control.markAsTouched) {
        control.markAsTouched();
      }
    });
  }

  private sendAppointmentEmail(contact: ContactFormValue) {
    if (typeof window === 'undefined') {
      return;
    }

    const subject = encodeURIComponent(`Appointment request from ${contact.name}`);
    const body = encodeURIComponent(
      [
        'New appointment request',
        '',
        `Name: ${contact.name}`,
        `Email: ${contact.email}`,
        `Phone: ${contact.phone}`,
        '',
        'Message:',
        contact.message || 'Not provided'
      ].join('\n')
    );

    window.location.href = `mailto:${this.clinicEmail}?subject=${subject}&body=${body}`;
  }
}
