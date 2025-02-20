import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
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