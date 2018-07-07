import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
  });

  it('should be created', inject([HttpTestingController, SearchService], (httpMock: HttpTestingController, service: SearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should return exactly what it\'s http call to /getTracks returns', inject([HttpTestingController, SearchService], (httpMock: HttpTestingController, service: SearchService) => {
    const mockResponse = {tracks:[{},{},{}]};
    service.getTracks('1234').subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
    const mockReq = httpMock.expectOne('http://localhost:8080/getTracks?albumId=1234');

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');

    mockReq.flush(mockResponse);

    httpMock.verify();
  }));

  it('should return exactly what it\'s http call to /search returns', inject([HttpTestingController, SearchService], (httpMock: HttpTestingController, service: SearchService) => {
    const mockResponse = {tracks:[{},{},{}]};
    service.search('1234', 'track').subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
    const mockReq = httpMock.expectOne('http://localhost:8080/search?query=1234&type=track');

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');

    mockReq.flush(mockResponse);

    httpMock.verify();
  }));


});
