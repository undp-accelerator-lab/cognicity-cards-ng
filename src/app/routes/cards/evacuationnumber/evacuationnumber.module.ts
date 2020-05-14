import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvacuationnumberRoutingModule } from './evacuationnumber-routing.module';
import { EvacuationnumberComponent } from './evacuationnumber.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [EvacuationnumberComponent],
  imports: [
    CommonModule,
    EvacuationnumberRoutingModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class EvacuationnumberModule { }
