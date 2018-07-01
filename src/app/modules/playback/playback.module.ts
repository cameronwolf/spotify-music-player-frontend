import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaybackComponent } from './playback/playback.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PlaybackComponent]
})
export class PlaybackModule { }
