import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HireMeComponent } from './pages/hire-me/hire-me.component';
import { SubmitionSuccessComponent } from './components/success/submition-success/submition-success.component';
import { SubmitionErrorComponent } from './components/error/submition-error/submition-error.component';





export const routes: Routes = [

  // Page links
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "portfolio", component: PortfolioComponent},
  {path: "hireme", component: HireMeComponent},

  // Component pages
  {path: "submitSuccess", component: SubmitionSuccessComponent
  },
  {path: "oopsSubmittionerror", component: SubmitionErrorComponent}
];
