import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TrackComponent } from './components/track/track.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [TrackComponent, AlbumComponent],
  exports: [TrackComponent, AlbumComponent]
})
export class SharedModule { }
