import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlaybackService } from '../../../shared/services/playback.service';
import { of } from 'rxjs';
import * as sinon from 'sinon';

import { PlaybackComponent } from './playback.component';

describe('PlaybackComponent', () => {
  let component: PlaybackComponent;
  let fixture: ComponentFixture<PlaybackComponent>;
  let spy;
  class MockPlaybackService {
    getPlayback() {
      return of([{},{},{}]);
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaybackComponent ],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: PlaybackService, useClass: MockPlaybackService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybackComponent);
    const service = TestBed.get(PlaybackService);
    spy = sinon.spy(service, 'getPlayback');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPlayback', () => {
    expect(spy.called).toBeTruthy();
  });

  it('should set value of upcomingSongs', () => {
    expect(component.upcomingSongs).toEqual([{},{},{}]);
  });
});
