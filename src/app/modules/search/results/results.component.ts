import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  private trackSearch = false;
  private searchType
  results: any;
  constructor(
    private search: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params.query){
        this.searchType = this.extractRoute(this.router.url);
        console.log(`searching ${this.searchType}`);
        this.search.search(params['query'], this.searchType).subscribe(response => {
          this.results = response;
        });
      }
      else if(params.albumId){
        this.searchType = 'album-track';
        console.log(`getting tracks for ${params.albumId}`);
        this.search.getTracks(params.albumId).subscribe(tracks => {
          this.results = tracks;
        })
      }
    });
  }

  isTrack(){
    return this.searchType === 'track' || this.searchType === 'album-track';
  }

  isAlbum(){
    return this.searchType === 'album';
  }

  isArtist(){
    return this.searchType === 'artist';
  }

  private extractRoute(rawURL: String):String {
    return rawURL.split('?')[0].split('/')[1];
  }

}
