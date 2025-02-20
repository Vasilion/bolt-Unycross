import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { App } from './app/app.component';
import { HomeComponent } from './app/pages/home.component';
import { AboutComponent } from './app/pages/about.component';
import { ServicesComponent } from './app/pages/services.component';
import { PortfolioComponent } from './app/pages/portfolio.component';
import { BlogComponent } from './app/pages/blog.component';
import { ContactComponent } from './app/pages/contact.component';

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