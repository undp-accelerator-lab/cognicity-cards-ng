import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from './routes/landing/landing.module';
import { ErrorComponent } from './routes/error/error.component';
import { ThanksComponent } from './routes/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    LandingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
