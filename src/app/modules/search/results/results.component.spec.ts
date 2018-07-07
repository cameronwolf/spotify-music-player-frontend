import { inject, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as sinon from 'sinon';

import { ResultsComponent } from './results.component';
import { SearchService } from '../../../shared/services/search.service';

class MockSearchService {
  search(a, b){
    return of({tracks: {a: {}}});
  }
  getTracks(a){
    return of({tracks: {b: {}}});
  }
}

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isTrack', () => {
    it('should return true when searchType is track', () => {
      component.searchType = 'track';
      expect(component.isTrack()).toBe(true);
    });

    it('should return true when searchType is album-track', () => {
      component.searchType = 'album-track';
      expect(component.isTrack()).toBe(true);
    });
    it('should return false when searchType is anything_else', () => {
      component.searchType = 'anything_else';
      expect(component.isTrack()).toBe(false);
    });
  });

  describe('isAlbum', () => {
    it('should return true when searchType is album', () => {
      component.searchType = 'album';
      expect(component.isAlbum()).toBe(true)
    });
    it('should return false when searchType is anything_else', () => {
      component.searchType = 'anything_else';
      expect(component.isAlbum()).toBe(false)
    });
  });

  describe('isArtist', () => {
    it('should return true when searchType is artist', () => {
      component.searchType = 'artist';
      expect(component.isArtist()).toBe(true);
    });
    it('should return false when searchType is anything_else', () => {
      component.searchType = 'anything_else';
      expect(component.isArtist()).toBe(false);
    });
  });
});

describe('ngOnInit', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let service: SearchService;
  describe(' with query params', () => {
    const mockRoute = {
      queryParams: of({type: 'track', query: 'abcd'})
    };
    const mockRouter = {
      url: '/track?'
    }
    let searchSpy;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ResultsComponent ],
        imports: [HttpClientTestingModule, RouterTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          {provide: ActivatedRoute, useValue: mockRoute},
          {provide: Router, useValue: mockRouter},
          {provide: SearchService, useClass: MockSearchService}
        ]
      })
      .compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(ResultsComponent);
      service = TestBed.get(SearchService);
      searchSpy = sinon.spy(service, 'search');
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it(' should set searchType to the type passed in',() => {
      expect(component.searchType).toBe('track');
      expect(searchSpy.calledWith('abcd', 'track')).toBeTruthy();
      expect(component.results).toEqual({tracks: {a: {}}})
    });;
  });
  describe(' with albumId', () => {
    const mockRoute = {
      queryParams: of({albumId: '123'})
    };
    let spy;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ResultsComponent ],
        imports: [HttpClientTestingModule, RouterTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
          {provide: ActivatedRoute, useValue: mockRoute},
          {provide: SearchService, useClass: MockSearchService}
        ]
      })
      .compileComponents();
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(ResultsComponent);
      const service = TestBed.get(SearchService);
      spy = sinon.spy(service, 'getTracks');
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it(' should call SearchService.getTracks',()=>{
      expect(component.searchType).toBe('album-track');
      expect(spy.calledWith('123')).toBeTruthy();
      expect(component.results).toEqual({tracks: {b: {}}})
    });
  });
});
