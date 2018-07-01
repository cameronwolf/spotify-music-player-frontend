import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { PlaybackModule } from './modules/playback/playback.module';
import { SearchModule } from './modules/search/search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthenticationModule,
    SharedModule,
    PlaybackModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
