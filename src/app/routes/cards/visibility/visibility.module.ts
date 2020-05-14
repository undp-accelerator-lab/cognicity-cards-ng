import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisibilityRoutingModule } from './visibility-routing.module';
import { VisibilityComponent } from './visibility.component';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    VisibilityRoutingModule,
    TranslateModule
  ],
  declarations: [VisibilityComponent],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class VisibilityModule { }
