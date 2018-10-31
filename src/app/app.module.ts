import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { ErrorComponent } from './routes/error/error.component';
import { ThanksComponent } from './routes/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
