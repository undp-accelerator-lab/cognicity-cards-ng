import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

// Routing module
import { VolcanoRoutingModule } from './volcano-routing.module';

// Parent component
import { VolcanoComponent } from './volcano.component';

// Child components
import { UtilsModule } from '../utils.module';

@NgModule({
  imports: [
    CommonModule,
    VolcanoRoutingModule,
    TranslateModule,
    UtilsModule
  ],
  declarations: [
    VolcanoComponent,
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class VolcanoModule { }
