import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ResultsComponent } from './results/results.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SearchComponent, ResultsComponent]
})
export class SearchModule { }
