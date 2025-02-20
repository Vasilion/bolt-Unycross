import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app.component';
import { HomeComponent } from './app/features/home/home.component';
import { AboutComponent } from './app/features/about/about.component';
import { ServicesComponent } from './app/features/services/services.component';
import { PortfolioComponent } from './app/features/portfolio/portfolio.component';
import { BlogComponent } from './app/features/blog/blog.component';
import { ContactComponent } from './app/features/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
}).catch(err => console.error(err));