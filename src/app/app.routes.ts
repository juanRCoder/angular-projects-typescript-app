import { Routes } from '@angular/router';
// PROJECTS
import { DashboardComponent } from './theme-quizz/dashboard/dashboard.component';
import { AnimeMangaComponent } from './theme-quizz/anime-manga/anime-manga.component';
import { CienciasComponent } from './theme-quizz/ciencias/ciencias.component';
import { DeportesComponent } from './theme-quizz/deportes/deportes.component';
import { GeneralComponent } from './theme-quizz/general/general.component';
import { MiniAppsComponent } from './mini-apps/mini-apps.component';
import { DashboardComponent1 } from './solvthink/dashboard/dashboard.component';
import { ConfigurationComponent } from './solvthink/configuration/configuration.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TranslateAppComponent } from './translate-app/translate-app.component';
// PAGES

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MiniAppsComponent },
  // PROJECTS
  { path: 'theme-quizz', component: DashboardComponent },
  { path: 'anime-manga', component: AnimeMangaComponent },
  { path: 'ciencias', component: CienciasComponent },
  { path: 'deportes', component: DeportesComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'solvthink', component: DashboardComponent1 },
  { path: 'config', component: ConfigurationComponent },
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'translate-app', component: TranslateAppComponent },
  // PAGES
];
