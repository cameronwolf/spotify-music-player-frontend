import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthenticateComponent, AuthenticatedComponent],
  exports: [AuthenticateComponent, AuthenticatedComponent]
})
export class AuthenticationModule { }
