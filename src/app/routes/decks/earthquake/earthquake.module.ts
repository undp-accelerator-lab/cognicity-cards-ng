import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Routing module
import { EarthquakeRoutingModule } from './earthquake-routing.module';

// Parent component
import { EarthquakeComponent } from './earthquake.component';
import { UtilsModule } from '../utils.module';

@NgModule({
  imports: [
    CommonModule,
    EarthquakeRoutingModule,
    TranslateModule,
    UtilsModule
  ],
  declarations: [
    EarthquakeComponent,
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class EarthquakeModule { }
