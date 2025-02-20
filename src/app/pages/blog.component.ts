import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `
    <section class="blog-page section-padding">
      <div class="container">
        <h1>Blog</h1>
        <div class="blog-grid">
          <mat-card class="blog-post">
            <img src="https://source.unsplash.com/random/800x400?coding" alt="Web Development">
            <mat-card-header>
              <mat-card-title>Web Development Trends 2025</mat-card-title>
              <mat-card-subtitle>January 15, 2025</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>Exploring the latest trends in web development and what they mean for the future of the internet...</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary">Read More</button>
            </mat-card-actions>
          </mat-card>

          <mat-card class="blog-post">
            <img src="https://source.unsplash.com/random/800x400?technology" alt="Technology">
            <mat-card-header>
              <mat-card-title>The Future of Web Hosting</mat-card-title>
              <mat-card-subtitle>January 10, 2025</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>How cloud technology is revolutionizing the way we host and deploy web applications...</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary">Read More</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .blog-page {
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

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
    }

    .blog-post {
      transition: transform 0.3s ease;
      background-color: var(--card-bg);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }

    .blog-post:hover {
      transform: translateY(-5px);
    }

    .blog-post img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-bottom: 2px solid var(--primary-purple);
    }

    mat-card-header {
      padding: 1rem 1rem 0;
    }

    mat-card-title {
      color: var(--primary-purple) !important;
      font-size: 1.3rem !important;
      margin-bottom: 0.5rem !important;
    }

    mat-card-subtitle {
      color: var(--light) !important;
      opacity: 0.8;
    }

    mat-card-content {
      padding: 1rem;
    }

    mat-card-content p {
      color: var(--light);
      opacity: 0.9;
      line-height: 1.6;
    }

    mat-card-actions {
      padding: 1rem;
      display: flex;
      justify-content: flex-start;
    }

    @media (max-width: 768px) {
      .blog-grid {
        grid-template-columns: 1fr;
        padding: 0.5rem;
      }

      h1 {
        font-size: 2rem;
      }
    }
  `]
})
export class BlogComponent {}