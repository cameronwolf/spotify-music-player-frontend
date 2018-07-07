import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

  constructor() { }

  @Input() title: String;
  @Input() artist: String;
  @Input() id: String;

}
