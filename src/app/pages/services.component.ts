import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <section class="services-page section-padding">
      <div class="container">
        <h1>Our Services</h1>
        
        <!-- Services List -->
        <div class="services-grid">
          <div class="service-item">
            <mat-icon>smart_toy</mat-icon>
            <h3>AI Consulting</h3>
            <p>Leverage the power of artificial intelligence for your business. We provide expert guidance on AI integration, machine learning solutions, and automated decision-making systems to enhance your operational efficiency.</p>
          </div>

          <div class="service-item">
            <mat-icon>autorenew</mat-icon>
            <h3>Business Automation</h3>
            <p>Streamline your operations with custom automation solutions. From workflow optimization to process automation, we help reduce manual tasks and increase productivity across your organization.</p>
          </div>

          <div class="service-item">
            <mat-icon>code</mat-icon>
            <h3>Web Development</h3>
            <p>Custom web solutions built with cutting-edge technologies. Our expert team creates responsive, scalable, and secure websites and web applications tailored to your specific needs.</p>
          </div>

          <div class="service-item">
            <mat-icon>cloud</mat-icon>
            <h3>Web Hosting</h3>
            <p>Reliable and secure hosting solutions with 99.9% uptime guarantee. We provide managed hosting services, including maintenance, security updates, and 24/7 technical support.</p>
          </div>

          <div class="service-item">
            <mat-icon>trending_up</mat-icon>
            <h3>SEO</h3>
            <p>Improve your online visibility with our comprehensive SEO services. We implement proven strategies to enhance your search engine rankings and drive organic traffic to your website.</p>
          </div>

          <div class="service-item">
            <mat-icon>campaign</mat-icon>
            <h3>Online Marketing</h3>
            <p>Comprehensive digital marketing solutions to grow your online presence. From social media management to content marketing and PPC campaigns, we help you reach and engage your target audience.</p>
          </div>
        </div>
        
        <!-- Pricing Tiers -->
        <h2 class="pricing-title">Pricing Plans</h2>
        <div class="pricing-grid">
          <mat-card class="pricing-card">
            <mat-card-header>
              <mat-card-title>Starter</mat-card-title>
              <mat-card-subtitle>For Small Businesses</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="price">$999</div>
              <ul>
                <li>5-Page Website</li>
                <li>Responsive Design</li>
                <li>Basic SEO</li>
                <li>Contact Form</li>
                <li>1 Year Hosting</li>
              </ul>
            </mat-card-content>
            <mat-card-actions>
              <a mat-raised-button color="primary" routerLink="/contact">Get Started</a>
            </mat-card-actions>
          </mat-card>

          <mat-card class="pricing-card featured">
            <mat-card-header>
              <mat-card-title>Professional</mat-card-title>
              <mat-card-subtitle>For Growing Companies</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="price">$2,499</div>
              <ul>
                <li>10-Page Website</li>
                <li>Advanced Design</li>
                <li>Full SEO Package</li>
                <li>CMS Integration</li>
                <li>2 Years Hosting</li>
                <li>Monthly Updates</li>
              </ul>
            </mat-card-content>
            <mat-card-actions>
              <a mat-raised-button color="primary" routerLink="/contact">Get Started</a>
            </mat-card-actions>
          </mat-card>

          <mat-card class="pricing-card">
            <mat-card-header>
              <mat-card-title>Enterprise</mat-card-title>
              <mat-card-subtitle>Custom Solutions</mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <div class="price">Custom</div>
              <ul>
                <li>Unlimited Pages</li>
                <li>Custom Development</li>
                <li>E-commerce Integration</li>
                <li>Premium Support</li>
                <li>Custom Hosting</li>
                <li>24/7 Maintenance</li>
              </ul>
            </mat-card-content>
            <mat-card-actions>
              <a mat-raised-button color="primary" routerLink="/contact">Contact Us</a>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-page {
      background-color: var(--darker);
      min-height: calc(100vh - 64px);
      padding: 4rem 0;
    }

    h1, h2 {
      text-align: center;
      color: var(--primary-purple);
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .service-item {
      background-color: var(--card-bg);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .service-item:hover {
      transform: translateY(-5px);
    }

    .service-item mat-icon {
      font-size: 2.5rem;
      height: 2.5rem;
      width: 2.5rem;
      color: var(--primary-purple);
      margin-bottom: 1rem;
    }

    .service-item h3 {
      color: var(--primary-purple);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .service-item p {
      color: var(--light);
      opacity: 0.9;
      line-height: 1.6;
    }

    .pricing-title {
      margin-top: 4rem;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .pricing-card {
      text-align: center;
      transition: transform 0.3s ease;
      background-color: var(--card-bg);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .pricing-card:hover {
      transform: translateY(-10px);
    }

    .pricing-card.featured {
      border: 2px solid var(--primary-purple);
      position: relative;
    }

    .pricing-card.featured::before {
      content: 'Popular';
      position: absolute;
      top: -12px;
      right: 20px;
      background: var(--primary-purple);
      color: var(--light);
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 0.8rem;
    }

    mat-card-title {
      color: var(--primary-purple) !important;
      font-size: 1.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    mat-card-subtitle {
      color: var(--light) !important;
      opacity: 0.8;
    }

    .price {
      font-size: 2.5rem;
      color: var(--primary-purple);
      margin: 1.5rem 0;
      font-weight: bold;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 1.5rem 0;
    }

    li {
      padding: 0.8rem 0;
      color: var(--light);
      opacity: 0.9;
      border-bottom: 1px solid var(--input-bg);
    }

    li:last-child {
      border-bottom: none;
    }

    mat-card-actions {
      padding: 1.5rem;
      margin-top: auto;
    }

    @media (max-width: 768px) {
      .pricing-grid {
        grid-template-columns: 1fr;
        padding: 0.5rem;
      }

      h1, h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class ServicesComponent {}