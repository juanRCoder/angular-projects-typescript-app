import { Routes } from '@angular/router';
// PROJECTS
import { MiniAppsComponent } from './mini-apps/mini-apps.component';
import { DashboardComponent1 } from './solvthink/dashboard/dashboard.component';
import { ConfigurationComponent } from './solvthink/configuration/configuration.component';
import { TranslateAppComponent } from './translate-app/translate-app.component';
import { CalculoFinancieroComponent } from './calculo-financiero/calculo-financiero.component';
// PAGES

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MiniAppsComponent },
  // PROJECTS
  { path: 'solvthink', component: DashboardComponent1 },
  { path: 'config', component: ConfigurationComponent },
  { path: 'translate-app', component: TranslateAppComponent },
  { path: 'calculo-financiero', component: CalculoFinancieroComponent },
  
  // PAGES
];
