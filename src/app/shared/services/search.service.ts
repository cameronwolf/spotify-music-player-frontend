import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  search(query: String, type: String){
    return this.http.get(`http://localhost:8080/search?query=${query}&type=${type}`);
  }

  getTracks(albumId){
    return this.http.get(`http://localhost:8080/getTracks?albumId=${albumId}`);
  }
}
