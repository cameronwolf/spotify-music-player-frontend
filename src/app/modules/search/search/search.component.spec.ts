import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as sinon from 'sinon';

import { SearchComponent } from './search.component';
import { SearchService } from '../../../shared/services/search.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    const service = TestBed.get(SearchService);
    spy = sinon.spy(service, 'search');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/track"', () => {
    const calledWithObject = {
      queryParams: {
        query: 'acbd'
      }
    }
    component.searchForm.get('query').setValue('acbd');
    const spy = spyOn((<any>component).router, 'navigate');
    component.trackSearch();
    expect(spy).toHaveBeenCalledWith(['/track'], calledWithObject);
  })
});
