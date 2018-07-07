import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlaybackService } from './playback.service';

describe('PlaybackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlaybackService]
    });
  });

  it('should be created', inject([HttpTestingController, PlaybackService], (http:HttpTestingController, service: PlaybackService) => {
    expect(service).toBeTruthy();
  }));

  it('should access /getPlayback of the server when getPlayback is called', inject([HttpTestingController, PlaybackService], (httpMock: HttpTestingController, service: PlaybackService) => {
    const mockResponse = [{},{},{}];
    service.getPlayback().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });
    const mockReq = httpMock.expectOne('http://localhost:8080/getPlayback');

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');

    mockReq.flush(mockResponse);

    httpMock.verify();
  }));
});
