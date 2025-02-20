import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Welcome to Unycross</h1>
        <p>Transforming Ideas into Digital Reality</p>
        <div class="cta-buttons">
          <a mat-raised-button color="primary" routerLink="/services">Our Services</a>
          <a mat-stroked-button routerLink="/contact" class="secondary-button">Get in Touch</a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features section-padding">
      <div class="container">
        <h2>Why Choose Unycross?</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>Expert Development</h3>
            <p>Custom web solutions tailored to your needs</p>
          </div>
          <div class="feature-card">
            <h3>Reliable Hosting</h3>
            <p>99.9% uptime guarantee with 24/7 support</p>
          </div>
          <div class="feature-card">
            <h3>Modern Design</h3>
            <p>Responsive and user-friendly interfaces</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      background: linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.7)),
                  url('https://source.unsplash.com/random/1920x1080?website') center/cover;
      color: var(--light);
      padding: 8rem 0;
      text-align: center;
      min-height: 80vh;
      display: flex;
      align-items: center;
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      color: var(--primary-purple);
    }

    .hero p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .secondary-button {
      color: var(--primary-purple) !important;
      border-color: var(--primary-purple) !important;
    }

    .features {
      background-color: var(--dark);
      padding: 6rem 0;
    }

    h2 {
      text-align: center;
      color: var(--primary-purple);
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .feature-card {
      padding: 2rem;
      border-radius: 8px;
      background-color: var(--card-bg);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    .feature-card h3 {
      color: var(--primary-purple);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .feature-card p {
      color: var(--light);
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }

      .hero p {
        font-size: 1.2rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .feature-card {
        text-align: center;
      }
    }
  `]
})
export class HomeComponent {}