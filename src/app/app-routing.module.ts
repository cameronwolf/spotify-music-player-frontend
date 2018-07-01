import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticateComponent } from './modules/authentication/authenticate/authenticate.component';
import { AuthenticatedComponent } from './modules/authentication/authenticated/authenticated.component';
import { PlaybackComponent } from './modules/playback/playback/playback.component';
import { SearchComponent } from './modules/search/search/search.component';
import { ResultsComponent } from './modules/search/results/results.component';

const routes: Routes = [
  {
    path: 'comingup',
    component: PlaybackComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'authenticate',
    component: AuthenticateComponent
  },
  {
    path: 'authenticated/:jwt',
    component: AuthenticatedComponent
  },
  {
    path: 'track',
    component: ResultsComponent
  },
  {
    path: 'album',
    component: ResultsComponent
  },
  {
    path: 'artist',
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
