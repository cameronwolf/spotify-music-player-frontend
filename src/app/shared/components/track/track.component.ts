import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent {

  @Input() index: number;
  @Input() title: String;
  @Input() artist: String;

  constructor() { }

}
