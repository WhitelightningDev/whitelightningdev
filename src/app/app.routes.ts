import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [

  // Page links
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "portfolio", component: PortfolioComponent}
];
