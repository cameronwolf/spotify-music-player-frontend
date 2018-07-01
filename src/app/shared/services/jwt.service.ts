import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  public saveJwt(jwt) {
    localStorage.setItem('jwt', jwt);
  }

  public getJwt() {
    return localStorage.getItem('jwt');
  }

}
