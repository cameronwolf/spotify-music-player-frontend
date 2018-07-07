import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackComponent } from './track.component';

describe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isIndexPresent', () => {
    it(' should return true for index being 0', () => {
      component.index = 0;
      expect(component.isIndexPresent()).toBe(true);
    });
    it(' should return false for index being undefined', () => {
      component.index = undefined;
      expect(component.isIndexPresent()).toBe(false);
    });
    it(' should return false for index being null', () => {
      component.index = null;
      expect(component.isIndexPresent()).toBe(false);
    });
  });
});
