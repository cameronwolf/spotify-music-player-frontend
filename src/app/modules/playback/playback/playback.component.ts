import { Component, OnInit } from '@angular/core';
import { PlaybackService } from '../../../shared/services/playback.service';
@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss']
})
export class PlaybackComponent implements OnInit{

  upcomingSongs: any;
  constructor(
    private playback: PlaybackService
  ) { }

  ngOnInit() {
    this.playback.getPlayback().subscribe(response => {
      this.upcomingSongs = response;
    });
  }

}
