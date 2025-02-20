import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `
    <section class="portfolio-page section-padding">
      <div class="container">
        <h1>Our Portfolio</h1>
        <div class="portfolio-grid">
          <mat-card class="portfolio-item">
            <img src="https://source.unsplash.com/random/800x600?website" alt="Project 1">
            <mat-card-content>
              <h3>E-Commerce Platform</h3>
              <p>Custom e-commerce solution with advanced features</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary">View Project</button>
            </mat-card-actions>
          </mat-card>

          <mat-card class="portfolio-item">
            <img src="https://source.unsplash.com/random/800x600?web" alt="Project 2">
            <mat-card-content>
              <h3>Corporate Website</h3>
              <p>Modern website for a leading technology company</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary">View Project</button>
            </mat-card-actions>
          </mat-card>

          <mat-card class="portfolio-item">
            <img src="https://source.unsplash.com/random/800x600?tech" alt="Project 3">
            <mat-card-content>
              <h3>Tech Startup Platform</h3>
              <p>Innovative platform for a growing startup</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary">View Project</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .portfolio-page {
      padding: 4rem 0;
      background-color: var(--darker);
      min-height: calc(100vh - 64px);
    }

    h1 {
      text-align: center;
      color: var(--primary-purple);
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .portfolio-item {
      transition: transform 0.3s ease;
      background-color: var(--card-bg);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }

    .portfolio-item:hover {
      transform: translateY(-5px);
    }

    .portfolio-item img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-bottom: 2px solid var(--primary-purple);
    }

    h3 {
      color: var(--primary-purple);
      margin: 1rem 0;
      font-size: 1.5rem;
    }

    p {
      color: var(--light);
      opacity: 0.9;
      margin-bottom: 1rem;
    }

    mat-card-content {
      padding: 1rem;
    }

    mat-card-actions {
      padding: 1rem;
      display: flex;
      justify-content: flex-start;
    }

    @media (max-width: 768px) {
      .portfolio-grid {
        grid-template-columns: 1fr;
        padding: 0.5rem;
      }

      h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class PortfolioComponent {}