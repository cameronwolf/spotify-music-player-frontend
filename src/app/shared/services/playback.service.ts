import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaybackService {

  constructor(
    private http: HttpClient
  ) { }

  getPlayback(){
    return this.http.get(`http://localhost:8080/getPlayback`);
  }
}
