import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule
  ],
  template: `
    <!-- Main Navigation -->
    <mat-toolbar color="primary" class="navbar">
      <button mat-icon-button (click)="sidenav.toggle()" class="menu-button">
        <mat-icon>menu</mat-icon>
      </button>
      <span class="logo">Unycross</span>
      <div class="nav-links" [class.mobile-hidden]="true">
        <a mat-button routerLink="/">Home</a>
        <a mat-button routerLink="/about">About</a>
        <a mat-button routerLink="/services">Services</a>
        <a mat-button routerLink="/portfolio">Portfolio</a>
        <a mat-button routerLink="/blog">Blog</a>
        <a mat-button routerLink="/contact">Contact</a>
      </div>
      <div class="social-icons">
        <a mat-icon-button href="https://twitter.com/unycross" target="_blank">
          <mat-icon>alternate_email</mat-icon>
        </a>
        <a mat-icon-button href="https://facebook.com/unycross" target="_blank">
          <mat-icon>facebook</mat-icon>
        </a>
        <a mat-icon-button href="https://instagram.com/unycross" target="_blank">
          <mat-icon>photo_camera</mat-icon>
        </a>
        <a mat-icon-button href="https://youtube.com/unycross" target="_blank">
          <mat-icon>play_circle</mat-icon>
        </a>
      </div>
    </mat-toolbar>

    <!-- Mobile Sidenav -->
    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="over" class="dark-sidenav">
        <div class="sidenav-content">
          <a mat-button routerLink="/" (click)="sidenav.close()">Home</a>
          <a mat-button routerLink="/about" (click)="sidenav.close()">About</a>
          <a mat-button routerLink="/services" (click)="sidenav.close()">Services</a>
          <a mat-button routerLink="/portfolio" (click)="sidenav.close()">Portfolio</a>
          <a mat-button routerLink="/blog" (click)="sidenav.close()">Blog</a>
          <a mat-button routerLink="/contact" (click)="sidenav.close()">Contact</a>
        </div>
      </mat-sidenav>
      <mat-sidenav-content>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Unycross</h3>
            <p>Web Development & Hosting Solutions</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <a routerLink="/services">Services</a>
            <a routerLink="/portfolio">Portfolio</a>
            <a routerLink="/contact">Contact</a>
          </div>
          <div class="footer-section">
            <h4>Contact</h4>
            <p>Email: example</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Unycross. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Navigation Styles */
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      background-color: var(--darker) !important;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary-purple);
    }

    .nav-links {
      display: flex;
      align-items: center;
    }

    .social-icons {
      display: flex;
      align-items: center;
    }

    /* Sidenav Styles */
    mat-sidenav-container {
      min-height: calc(100vh - 64px);
      margin-top: 64px;
      background-color: var(--dark);
    }

    .dark-sidenav {
      background-color: var(--darker);
    }

    .sidenav-content {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      min-width: 200px;
    }

    .sidenav-content a {
      margin: 0.5rem 0;
      color: var(--light);
    }

    /* Footer Styles */
    .footer {
      background-color: var(--darker);
      color: var(--light);
      padding: 3rem 0 1rem;
      margin-top: 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3,
    .footer-section h4 {
      margin-bottom: 1rem;
      color: var(--primary-purple);
    }

    .footer-section a {
      display: block;
      color: var(--light);
      text-decoration: none;
      margin-bottom: 0.5rem;
      opacity: 0.8;
    }

    .footer-section a:hover {
      opacity: 1;
      color: var(--primary-purple);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 1rem;
      border-top: 1px solid var(--gray);
      opacity: 0.8;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .menu-button {
        display: block;
      }

      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }

    @media (min-width: 769px) {
      .menu-button {
        display: none;
      }
    }
  `]
})
export class App {
  @ViewChild('sidenav') sidenav!: MatSidenav;
}