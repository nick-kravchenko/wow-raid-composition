import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./composition/composition.module').then(m => m.CompositionModule) },
  { path: 'players', loadChildren: () => import('./players/players.module').then(m => m.PlayersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
