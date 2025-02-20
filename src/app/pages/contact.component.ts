import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  template: `
    <section class="contact-page section-padding">
      <div class="container">
        <div class="contact-header">
          <h1>Get in Touch</h1>
          <p class="subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
        <div class="contact-content">
          <div class="contact-form-container">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <div class="form-row">
                <mat-form-field appearance="outline" class="form-field">
                  <mat-label>Name</mat-label>
                  <input matInput formControlName="name" placeholder="Your name">
                  @if (contactForm.get('name')?.hasError('required') && contactForm.get('name')?.touched) {
                    <mat-error>Name is required</mat-error>
                  }
                </mat-form-field>

                <mat-form-field appearance="outline" class="form-field">
                  <mat-label>Email</mat-label>
                  <input matInput formControlName="email" placeholder="Your email" type="email">
                  @if (contactForm.get('email')?.hasError('required') && contactForm.get('email')?.touched) {
                    <mat-error>Email is required</mat-error>
                  }
                  @if (contactForm.get('email')?.hasError('email') && !contactForm.get('email')?.hasError('required')) {
                    <mat-error>Please enter a valid email address</mat-error>
                  }
                </mat-form-field>
              </div>

              <mat-form-field appearance="outline" class="form-field">
                <mat-label>Message</mat-label>
                <textarea matInput formControlName="message" placeholder="Your message" rows="6"></textarea>
                @if (contactForm.get('message')?.hasError('required') && contactForm.get('message')?.touched) {
                  <mat-error>Message is required</mat-error>
                }
              </mat-form-field>

              <button mat-raised-button color="primary" type="submit" [disabled]="contactForm.invalid" class="submit-button">
                Send Message
              </button>
            </form>
          </div>

          <div class="contact-info">
            <div class="info-card">
              <h3>Contact Information</h3>
              <p><mat-icon>location_on</mat-icon> 123 Business Street, Suite 100</p>
              <p><mat-icon>phone</mat-icon> (555) 123-4567</p>
              <p><mat-icon>email</mat-icon> example</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-page {
      padding: 4rem 0;
      background-color: var(--darker);
      min-height: calc(100vh - 64px);
    }

    .contact-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    h1 {
      color: var(--primary-purple);
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }

    .subtitle {
      color: var(--light);
      font-size: 1.2rem;
      opacity: 0.8;
    }

    .contact-content {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }

    .contact-form-container {
      background-color: var(--card-bg);
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-field {
      width: 100%;
    }

    :host ::ng-deep .mat-mdc-form-field-flex {
      background-color: var(--input-bg) !important;
    }

    :host ::ng-deep .mdc-text-field--outlined {
      --mdc-outlined-text-field-container-color: var(--input-bg);
    }

    :host ::ng-deep .mat-mdc-form-field-focus-overlay {
      background-color: var(--input-bg);
    }

    .submit-button {
      width: 100%;
      padding: 1.5rem;
      font-size: 1.1rem;
      margin-top: 1rem;
      background-color: var(--secondary-purple);
    }

    .contact-info {
      color: var(--light);
    }

    .info-card {
      background-color: var(--card-bg);
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .info-card h3 {
      color: var(--primary-purple);
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }

    .info-card p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      opacity: 0.9;
    }

    mat-icon {
      color: var(--primary-purple);
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .contact-form-container {
        padding: 1.5rem;
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      
      this.snackBar.open('Message sent successfully!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
      
      this.contactForm.reset();
    }
  }
}