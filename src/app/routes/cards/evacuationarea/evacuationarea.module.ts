import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvacuationareaRoutingModule } from './evacuationarea-routing.module';
import { EvacuationareaComponent } from './evacuationarea.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [EvacuationareaComponent],
  imports: [
    CommonModule,
    EvacuationareaRoutingModule,
    TranslateModule
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class EvacuationareaModule { }
