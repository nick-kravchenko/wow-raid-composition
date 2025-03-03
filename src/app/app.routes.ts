import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'composition', loadComponent: () => import('./composition/composition.component').then(m => m.CompositionComponent) },
  { path: 'about-us', loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent) },
  { path: 'calendar', loadComponent: () => import('./calendar/calendar.component').then(m => m.CalendarComponent) },
  { path: 'players', loadComponent: () => import('./players/players.component').then(m => m.PlayersComponent) },
  { path: '**', redirectTo: '' },
];
