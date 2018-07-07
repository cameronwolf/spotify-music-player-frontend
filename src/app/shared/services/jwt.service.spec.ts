import { TestBed, inject } from '@angular/core/testing';

import { JwtService } from './jwt.service';

describe('JwtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtService]
    });
  });

  it('should be created', inject([JwtService], (service: JwtService) => {
    expect(service).toBeTruthy();
  }));

  it('should save jwt when saveJwt called', inject([JwtService], (service: JwtService) => {
    const jwt = 'value';
    service.saveJwt(jwt);
    expect(localStorage.getItem('jwt')).toBe(jwt);
  }));

  it('should get jwt when getJwt called', inject([JwtService], (service: JwtService) => {
    const jwt = 'value';
    localStorage.setItem('jwt', jwt);
    expect(service.getJwt()).toBe(jwt);
  }));
});
