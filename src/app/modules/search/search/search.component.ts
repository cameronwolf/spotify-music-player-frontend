import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public router: Router
  ) {
      this.searchForm = this.fb.group(
        {
          type: 'track',
          query: ''
        }
      );
    }

  trackSearch() {
    const navExtras: NavigationExtras = {
      queryParams: {
        query: this.searchForm.get('query').value
      }
    }
    this.router.navigate([`/${this.searchForm.get('type').value}`], navExtras)

  }

}
