import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JwtService } from '../../../shared/services/jwt.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html'
})
export class AuthenticatedComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private jwt: JwtService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // console.log('params[\'jwt\']', params['jwt']);
      this.jwt.saveJwt(params['jwt']);
      this.router.navigate(['/'])
    });
  }

}
