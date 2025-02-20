import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule, MatButtonModule],
  template: `
    <section class="about-page section-padding">
      <div class="container">
        <h1>About Unycross</h1>
        <div class="about-content">
          <mat-card>
            <mat-card-content>
              <div class="story-section">
                <div class="image-slider">
                  <div class="slider-container" [style.transform]="'translateX(' + (-currentSlide * 100) + '%)'">
                    <img src="https://source.unsplash.com/random/800x400?office" alt="Our Office">
                    <img src="https://source.unsplash.com/random/800x400?team" alt="Our Team">
                    <img src="https://source.unsplash.com/random/800x400?technology" alt="Our Technology">
                  </div>
                  <div class="slider-controls">
                    <button mat-icon-button (click)="prevSlide()">
                      <mat-icon>chevron_left</mat-icon>
                    </button>
                    <div class="slider-dots">
                      @for (dot of [0, 1, 2]; track dot) {
                        <span 
                          class="dot" 
                          [class.active]="currentSlide === dot"
                          (click)="currentSlide = dot">
                        </span>
                      }
                    </div>
                    <button mat-icon-button (click)="nextSlide()">
                      <mat-icon>chevron_right</mat-icon>
                    </button>
                  </div>
                </div>
                <div class="story-content">
                  <h2>Our Story</h2>
                  <p>
                    Unycross is a leading web development and hosting company dedicated to 
                    transforming digital ideas into reality. Founded with a passion for 
                    creating exceptional web experiences, we've helped numerous businesses 
                    establish their online presence.
                  </p>
                </div>
              </div>
            </mat-card-content>
          </mat-card>

          <div class="about-grid">
            <mat-card>
              <mat-card-content>
                <h3>Our Mission</h3>
                <p>To deliver innovative web solutions that empower businesses to thrive in the digital age.</p>
              </mat-card-content>
            </mat-card>

            <mat-card>
              <mat-card-content>
                <h3>Our Vision</h3>
                <p>To be the leading force in web development, setting new standards for digital excellence.</p>
              </mat-card-content>
            </mat-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-page {
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

    .about-content {
      max-width: 800px;
      margin: 0 auto;
    }

    mat-card {
      padding: 2rem;
      margin-bottom: 2rem;
      background-color: var(--card-bg);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .story-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .image-slider {
      position: relative;
      width: 100%;
      overflow: hidden;
      border-radius: 8px;
    }

    .slider-container {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    .slider-container img {
      width: 100%;
      flex-shrink: 0;
      object-fit: cover;
      height: 300px;
    }

    .slider-controls {
      position: absolute;
      bottom: 1rem;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .slider-dots {
      display: flex;
      gap: 0.5rem;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--light);
      opacity: 0.5;
      cursor: pointer;
      transition: opacity 0.3s ease;
    }

    .dot.active {
      opacity: 1;
      background-color: var(--primary-purple);
    }

    button[mat-icon-button] {
      color: var(--light);
      background-color: rgba(0, 0, 0, 0.5);
    }

    h2 {
      color: var(--primary-purple);
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }

    h3 {
      color: var(--primary-purple);
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    p {
      line-height: 1.8;
      color: var(--light);
      opacity: 0.9;
    }

    .about-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .about-grid mat-card {
      margin-bottom: 0;
      height: 100%;
    }

    @media (max-width: 768px) {
      .about-content {
        padding: 0 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.75rem;
      }

      .slider-container img {
        height: 200px;
      }
    }
  `]
})
export class AboutComponent {
  currentSlide = 0;

  prevSlide() {
    this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : 2;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide < 2 ? this.currentSlide + 1 : 0;
  }
}